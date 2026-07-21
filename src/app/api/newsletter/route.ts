import { NextRequest, NextResponse } from 'next/server'
import { addBrevoContact } from '@/lib/brevo'

const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID ?? 2)

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { email, name } = body

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  // Fire-and-forget
  addBrevoContact(
    email,
    { FIRSTNAME: name || undefined },
    [NEWSLETTER_LIST_ID]
  ).catch((err) => console.error('[newsletter] brevo failed:', err))

  return NextResponse.json({ ok: true })
}
