'use server'

import { EmailTemplate } from '../../../components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitForm(formData: FormData) {
  'use server'
  const message = formData.get('message')!.toString()
  const name = formData.get('name')!.toString()
  const email = formData.get('email')!.toString()
  await POST(name, email, message)
}

async function POST(name: string, email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: 'tyreece.jay@gmail.com',
      subject: `New email from ${name}`,
      react: EmailTemplate({ message }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
