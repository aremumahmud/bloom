import { NextRequest, NextResponse } from 'next/server'
import { sendTransactionalEmail } from '@/lib/brevo'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, relationship, message, referral_source, source } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await sendTransactionalEmail({
      to: [{ email: process.env.BREVO_NOTIFICATION_EMAIL ?? 'info@bloomhomecare.org', name: 'Bloom Home Care' }],
      replyTo: { email, name },
      subject: `New Contact Form: ${name}`,
      htmlContent: `
        <h2 style="color:#4a7c59">New Inquiry — Bloom Home Care</h2>
        <p><strong>Source:</strong> ${source ?? 'Contact Form'}</p>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td style="background:#f4f8f5;width:140px"><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td style="background:#f4f8f5"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="background:#f4f8f5"><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
          <tr><td style="background:#f4f8f5"><strong>Relationship</strong></td><td>${relationship || '—'}</td></tr>
          <tr><td style="background:#f4f8f5"><strong>Heard About Us</strong></td><td>${referral_source || '—'}</td></tr>
          <tr><td style="background:#f4f8f5;vertical-align:top"><strong>Message</strong></td><td>${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:24px">Reply directly to this email to respond to ${name}.</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
