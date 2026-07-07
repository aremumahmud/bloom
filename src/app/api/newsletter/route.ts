import { NextRequest, NextResponse } from 'next/server'
import { addBrevoContact } from '@/lib/brevo'

const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID ?? 2)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await addBrevoContact(
      email,
      { FIRSTNAME: name || undefined },
      [NEWSLETTER_LIST_ID]
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
