import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SubmitButton } from '../button/button'
import { form, inputs, area, input, field } from './form.css'
import { Montserrat } from 'next/font/google'
import { POST } from '@/app/api/send/route'
import { Text } from '@/app/_design/text/text'

const montserrat = Montserrat({ subsets: ['latin'] })

type Inputs = { name: string, email: string, message: string }

export default function Form({ setToast }: { setToast: (e: boolean) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setToast(true)
    POST(data.name, data.message, data.email)
    setTimeout(() => setToast(false), 3000)
  }

  return <> <form onSubmit={handleSubmit(onSubmit)} className={form}>
    <div className={inputs}>
      <div className={field}>
        <label><Text style='white'>Name</Text></label>
        <input {...register('name', { required: true })} type='text' placeholder='Joe Bloggs' className={`${input} ${montserrat.className}`} required />
      </div>
      <div className={field}>
        <label><Text style='white'>Email</Text></label>
        <input {...register('email', { required: true })} type='email' placeholder='jbloggs@gmail.com' className={`${input} ${montserrat.className}`} required />
      </div>
    </div>
    <div className={field}>
      <label><Text style='white'>Message</Text></label>
      <textarea {...register('message', { required: true })} placeholder='Hi, can we work together?' className={`${area} ${montserrat.className}`} required />
    </div>
    <SubmitButton>Send</SubmitButton>
  </form>
  </>
}
