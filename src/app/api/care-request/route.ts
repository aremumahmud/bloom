import { NextRequest, NextResponse } from 'next/server'
import { sendTransactionalEmail } from '@/lib/brevo'

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { clientName, phone, email, requestType, message } = body

  if (!clientName || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Send admin notification
  try {
    await sendTransactionalEmail({
      to: [{ email: process.env.BREVO_NOTIFICATION_EMAIL ?? 'info@bloomhomecare.org', name: 'Bloom Home Care' }],
      ...(email ? { replyTo: { email, name: clientName } } : {}),
      subject: `Urgent: New Care Request — ${clientName}`,
      htmlContent: `
        <h2 style="color:#4a7c59">New Care Request — Bloom Home Care</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td style="background:#f4f8f5;width:140px"><strong>Client Name</strong></td><td>${clientName}</td></tr>
          <tr><td style="background:#f4f8f5"><strong>Phone</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="background:#f4f8f5"><strong>Email</strong></td><td>${email ? `<a href="mailto:${email}">${email}</a>` : '—'}</td></tr>
          <tr><td style="background:#f4f8f5"><strong>Care Type</strong></td><td>${requestType || '—'}</td></tr>
          <tr><td style="background:#f4f8f5;vertical-align:top"><strong>Details</strong></td><td>${message ? message.replace(/\n/g, '<br>') : '—'}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:24px">Please follow up with this client as soon as possible.</p>
      `,
    })
  } catch (err) {
    console.error('[care-request] admin email failed:', err)
  }

  // Send user confirmation if email provided
  if (email) {
    try {
      await sendTransactionalEmail({
        to: [{ email, name: clientName }],
        subject: 'We received your support request — Bloom Home Care',
        htmlContent: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#333">
            <div style="background:#4a7c59;padding:32px;text-align:center">
              <h1 style="color:#fff;margin:0;font-size:24px">Bloom Home Care</h1>
            </div>
            <div style="padding:32px">
              <p style="font-size:18px">Hi ${clientName},</p>
              <p>We've received your support request and our team will be in touch with you shortly.</p>
              ${requestType ? `<p style="font-family:sans-serif"><strong>Request type:</strong> ${requestType}</p>` : ''}
              <p>If you need immediate assistance, please call us directly:</p>
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
      console.error('[care-request] user confirmation email failed:', err)
    }
  }

  return NextResponse.json({ ok: true })
}
