import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Debug logging
console.log('=== ENVIRONMENT VARIABLES DEBUG ===')
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('Supabase Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
console.log('process.env keys:', Object.keys(process.env).filter(key => key.includes('SUPABASE')))
console.log('Supabase URL:', supabaseUrl ? 'Present' : 'Missing')
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Present' : 'Missing')
console.log('URL length:', supabaseUrl?.length || 0)
console.log('Key length:', supabaseAnonKey?.length || 0)
console.log('===================================')

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