import { NextRequest, NextResponse } from 'next/server'
import { sendTransactionalEmail } from '@/lib/brevo'

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { name, email, phone, relationship, message, referral_source, source } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Send admin notification
  try {
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
  } catch (err) {
    console.error('[contact] admin email failed:', err)
  }

  // Send user confirmation
  try {
    await sendTransactionalEmail({
      to: [{ email, name }],
      subject: 'We received your message — Bloom Home Care',
      htmlContent: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#4a7c59;padding:32px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:24px">Bloom Home Care</h1>
          </div>
          <div style="padding:32px">
            <p style="font-size:18px">Hi ${name},</p>
            <p>Thank you for reaching out to Bloom Home Care. We've received your message and a member of our team will be in touch with you within one business day.</p>
            <p>In the meantime, if you have an urgent need, please don't hesitate to call us directly:</p>
            <p style="font-family:sans-serif;font-size:18px;font-weight:bold;color:#4a7c59">
              <a href="tel:+12819756044" style="color:#4a7c59;text-decoration:none">281-975-6044</a>
            </p>
            <p>Warm regards,<br><strong>The Bloom Home Care Team</strong></p>
          </div>
          <div style="background:#f4f8f5;padding:16px;text-align:center;font-family:sans-serif;font-size:12px;color:#888">
            Bloom Home Care · Katy, TX · bloomhomecare.org
          </div>
        </div>
      `,
    })
  } catch (err) {
    console.error('[contact] user confirmation email failed:', err)
  }

  return NextResponse.json({ ok: true })
}
