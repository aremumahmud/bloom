const BREVO_API_KEY = process.env.BREVO_API_KEY!
const BREVO_API = 'https://api.brevo.com/v3'

const headers = {
  'api-key': BREVO_API_KEY,
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export async function sendTransactionalEmail(payload: {
  to: { email: string; name?: string }[]
  subject: string
  htmlContent: string
  replyTo?: { email: string; name?: string }
}) {
  const res = await fetch(`${BREVO_API}/smtp/email`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      sender: {
        name: 'Bloom Home Care',
        email: process.env.BREVO_SENDER_EMAIL ?? 'info@bloomhomecare.org',
      },
      ...payload,
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Brevo email error ${res.status}: ${err}`)
  }
  return res.json()
}

export async function addBrevoContact(
  email: string,
  attributes: Record<string, string | undefined>,
  listIds?: number[]
) {
  const res = await fetch(`${BREVO_API}/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      attributes,
      listIds,
      updateEnabled: true,
    }),
  })
  // 204 = already exists and updated, 201 = created — both fine
  if (!res.ok && res.status !== 204) {
    const err = await res.text()
    throw new Error(`Brevo contact error ${res.status}: ${err}`)
  }
}
