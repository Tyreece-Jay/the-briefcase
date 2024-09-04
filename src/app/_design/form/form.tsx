import React from 'react'
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { match } from 'ts-pattern'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { SubmitButton } from '../button/button'
import { email, error, form, message, name } from './form.css'
import { Text } from "@/app/_design/text/text"
import { POST } from '@/app/api/send/route'

type Inputs = { name: string, email: string, message: string }

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => POST(data.name, data.email, data.message)

  return <form onSubmit={handleSubmit(onSubmit)} className={form}>
    <textarea placeholder="Your message" {...register("message", { required: true })} className={message} />
    <input type='text' placeholder="Full name" {...register("name", { required: true })} className={name} />
    <input type='email' placeholder="Email Address" {...register("email", { required: true })} className={email} />
    <SubmitButton onClick={() => onSubmit}>Send</SubmitButton>
    <ErrorMessage errors={errors} />
  </form>
}

function ErrorMessage({ errors }: { errors: FieldErrors<Inputs> }) {
  const errorMessage = match<FieldErrors<Inputs>>(errors)
    .with({ 'message': {} }, () => 'A message is required.')
    .with({ 'name': {} }, () => 'Your name is required.')
    .with({ 'email': {} }, () => 'Your email is required.')
    .otherwise(() => null)

  return errorMessage && <span className={error}><FontAwesomeIcon icon={faCircleExclamation} />{errorMessage}</span>
}
