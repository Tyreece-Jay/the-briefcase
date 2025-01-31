import React from 'react'
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { match } from 'ts-pattern'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { SubmitButton } from '../button/button'
import { email, error, form, message, name } from './form.css'
import { Montserrat } from 'next/font/google'
import { POST } from '@/app/api/send/route'

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
    <input {...register('name', { required: true })} type='text' placeholder='Name' className={`${name} ${montserrat.className}`} />
    <input {...register('email', { required: true })} type='email' placeholder='Email' className={`${email} ${montserrat.className}`} />
    <textarea {...register('message', { required: true })} placeholder='Message' className={`${message} ${montserrat.className}`} />
    <SubmitButton>Send</SubmitButton>
    <ErrorMessage errors={errors} />
  </form>
  </>
}

function ErrorMessage({ errors }: { errors: FieldErrors<Inputs> }) {
  const errorMessage = match<FieldErrors<Inputs>>(errors)
    .with({ 'name': {} }, () => 'A name is required.')
    .with({ 'email': {} }, () => 'An email is required.')
    .with({ 'message': {} }, () => 'A message is required.')
    .otherwise(() => null)

  return errorMessage && <span className={error}><FontAwesomeIcon icon={faCircleExclamation} />{errorMessage}</span>
}
