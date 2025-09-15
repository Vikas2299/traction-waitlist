import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface WaitlistEntry {
  id: string
  email: string
  name: string
  university?: string
  student_status?: 'current' | 'graduate' | 'prospective'
  created_at: string
  referral_source?: string
}

export async function addToWaitlist(data: {
  email: string
  name: string
  university?: string
  student_status?: 'current' | 'graduate' | 'prospective'
  referral_source?: string
}) {
  // Create client directly in function
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: entry, error } = await client
    .from('waitlist')
    .insert([data])
    .select()
    .single()

  if (error) {
    throw error
  }

  // Send confirmation email via server API (Resend)
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: data.email, name: data.name })
    })
    if (!res.ok) {
      const { error } = await res.json().catch(() => ({ error: 'Unknown error' }))
      console.warn('Email API returned non-OK response:', error)
    }
  } catch (emailError) {
    // Swallow email errors to not block signup
    console.warn('Failed to trigger confirmation email:', emailError)
  }

  return entry
}

export async function getWaitlistCount() {
  if (!supabase) {
    return 0
  }

  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  if (error) {
    throw error
  }

  return count || 0
} 