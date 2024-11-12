'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(name: string, message: string, email: string) {
  try {
    const { error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'tyreece.jay@gmail.com',
      subject: 'NEW WEBSITE MESSAGE',
      react: EmailTemplate({ name, message, email })
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
