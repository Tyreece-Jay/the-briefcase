import React from 'react'
// import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { match } from 'ts-pattern'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { SubmitButton } from '../button/button'
import { email, error, form, message, name } from './form.css'
import { SubmitForm } from '@/app/api/send/route'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

// type Inputs = { name: string, email: string, message: string }

export default function Form() {
  

  // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  // const onSubmit: SubmitHandler<Inputs> = (data) => POST(data.name, data.email, data.message)

  return <form action={SubmitForm} className={form}>
    <textarea name="message" placeholder="Your message" className={`${message} ${montserrat.className}`} />
    <input name="name" type='text' placeholder="Full name" className={`${name} ${montserrat.className}`} />
    <input name="email" type='email' placeholder="Email address" className={`${email} ${montserrat.className}`} />
    <SubmitButton>Send</SubmitButton>
    {/* <ErrorMessage errors={errors} /> */}
  </form>
}

// function ErrorMessage({ errors }: { errors: FieldErrors<Inputs> }) {
//   const errorMessage = match<FieldErrors<Inputs>>(errors)
//     .with({ 'message': {} }, () => 'A message is required.')
//     .with({ 'name': {} }, () => 'A name is required.')
//     .with({ 'email': {} }, () => 'An email is required.')
//     .otherwise(() => null)

//   return errorMessage && <span className={error}><FontAwesomeIcon icon={faCircleExclamation} />{errorMessage}</span>
// }
