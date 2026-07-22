import { NextRequest, NextResponse } from 'next/server'
import { addBrevoContact, sendTransactionalEmail } from '@/lib/brevo'

const LEADS_LIST_ID = Number(process.env.BREVO_LEADS_LIST_ID ?? 3)
const GUIDE_URL = process.env.LEAD_MAGNET_GUIDE_URL ?? 'https://bloomhomecare.org/bloom-home-care-guide.pdf'

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { name, email, phone } = body

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  // Add to Brevo leads list
  try {
    await addBrevoContact(
      email,
      { FIRSTNAME: name || undefined, PHONE: phone || undefined },
      [LEADS_LIST_ID]
    )
  } catch (err) {
    console.error('[lead-magnet] contact add failed:', err)
  }

  // Send guide delivery email
  try {
    await sendTransactionalEmail({
      to: [{ email, name: name || undefined }],
      subject: 'Your Free Home Care Guide from Bloom Home Care',
      htmlContent: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#4a7c59;padding:32px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:24px">Bloom Home Care</h1>
          </div>
          <div style="padding:32px">
            <p style="font-size:18px">Hi ${name || 'there'},</p>
            <p>Thank you for requesting our free home care guide. We hope it helps you and your family navigate this important journey.</p>
            <div style="text-align:center;margin:32px 0">
              <a href="${GUIDE_URL}"
                style="background:#4a7c59;color:#fff;padding:14px 32px;text-decoration:none;border-radius:6px;font-family:sans-serif;font-size:16px;font-weight:600">
                Download Your Free Guide
              </a>
            </div>
            <p>If you have any questions or would like to speak with a care coordinator, please don't hesitate to reach out:</p>
            <ul style="font-family:sans-serif">
              <li>Phone: <a href="tel:+12819756044">281-975-6044</a></li>
              <li>Email: <a href="mailto:info@bloomhomecare.org">info@bloomhomecare.org</a></li>
            </ul>
            <p>Warm regards,<br><strong>The Bloom Home Care Team</strong></p>
          </div>
          <div style="background:#f4f8f5;padding:16px;text-align:center;font-family:sans-serif;font-size:12px;color:#888">
            Bloom Home Care · Katy, TX · bloomhomecare.org
          </div>
        </div>
      `,
    })
  } catch (err) {
    console.error('[lead-magnet] guide email failed:', err)
  }

  return NextResponse.json({ ok: true })
}
