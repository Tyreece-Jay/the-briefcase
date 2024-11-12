import React, { useState } from 'react'
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { match } from 'ts-pattern'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { SubmitButton } from '../button/button'
import { email, error, form, message, name } from './form.css'
import { Montserrat } from 'next/font/google'
import { POST } from '@/app/api/send/route'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

type Inputs = { name: string, email: string, message: string }

export default function Form({ setToast }: { setToast: (e: boolean) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setToast(true)
    POST(data.name, data.message, data.email)
    setTimeout(() => setToast(false), 3000)
  }

  return <> <form onSubmit={handleSubmit(onSubmit)} className={form}>
    <textarea {...register("message", { required: true })} placeholder="Your message" className={`${message} ${montserrat.className}`} />
    <input {...register("name", { required: true })} type='text' placeholder="Full name" className={`${name} ${montserrat.className}`} />
    <input {...register("email", { required: true })} type='email' placeholder="Email address" className={`${email} ${montserrat.className}`} />
    <SubmitButton>Send</SubmitButton>
    <ErrorMessage errors={errors} />
  </form>
  </>
}

function ErrorMessage({ errors }: { errors: FieldErrors<Inputs> }) {
  const errorMessage = match<FieldErrors<Inputs>>(errors)
    .with({ 'message': {} }, () => 'A message is required.')
    .with({ 'name': {} }, () => 'A name is required.')
    .with({ 'email': {} }, () => 'An email is required.')
    .otherwise(() => null)

  return errorMessage && <span className={error}><FontAwesomeIcon icon={faCircleExclamation} />{errorMessage}</span>
}
