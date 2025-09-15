import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM_EMAIL || 'Traction <onboarding@resend.dev>'
const REPLY_TO = process.env.RESEND_REPLY_TO_EMAIL || 'traction.rewards@gmail.com'

export async function POST(request: Request) {
  try {
    const { to, name } = await request.json()

    if (!to || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Resend API key not configured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: FROM,
      to,
      subject: "Welcome to Traction! You're on the waitlist",
      replyTo: REPLY_TO,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b4f36;">Welcome to Traction, ${name}! 🎉</h2>
          <p>Thanks for joining our waitlist! You're now in line for early access.</p>
          <h3 style="color: #6b4f36;">What happens next?</h3>
          <ul>
            <li>We'll keep you updated on our progress</li>
            <li>You'll get early access to the Traction debit card</li>
            <li>Start earning rewards on tuition and student loans</li>
          </ul>
          <p><strong>Expected launch:</strong> Early 2026</p>
          <div style="background:#f7f4ef;padding:16px;border-radius:8px;margin:16px 0;">
            <h4 style="color:#6b4f36;margin:0 0 8px 0;">What you can expect</h4>
            <ul style="margin:0;">
              <li>Round-ups to the nearest dollar</li>
              <li>5% Traction match on your monthly round-ups</li>
              <li>3% APY on your FDIC-insured Tuition Vault</li>
              <li>Points for educational expenses and smart actions</li>
            </ul>
          </div>
          <p>Questions? Reach us at <a href="mailto:traction.rewards@gmail.com">traction.rewards@gmail.com</a></p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}