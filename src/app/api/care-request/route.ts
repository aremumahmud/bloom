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

  // Fire-and-forget — never block the user on email delivery
  sendTransactionalEmail({
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
  }).catch((err) => console.error('[care-request] email failed:', err))

  return NextResponse.json({ ok: true })
}
