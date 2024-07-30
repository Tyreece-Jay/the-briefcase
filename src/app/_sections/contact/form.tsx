'use client'

import React from 'react'
import styles from "./contact.module.css"
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { match } from 'ts-pattern'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../_design/buttons'

type Inputs = {
  name: string
  email: string
  message: string
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <input type='text' placeholder="Your mesasge" {...register("message", { required: true })} className={styles.message} />
    <input type='text' placeholder="Full name" {...register("name", { required: true })} className={styles.name} />
    <input type='email' placeholder="Email Address" {...register("email", { required: true })} className={styles.email} />
    <Button onClick={() => onSubmit} noMotion>SEND</Button>
    <ErrorMessage errors={errors} />
  </form>
}

function ErrorMessage({ errors }: { errors: FieldErrors<Inputs> }) {
  const error = match<FieldErrors<Inputs>>(errors)
    .with({ 'message': {} }, () => 'A message is required.')
    .with({ 'name': {} }, () => 'Your name is required.')
    .with({ 'email': {} }, () => 'Your email is required.')
    .otherwise(() => null)

  return error && <span className={styles.error}><FontAwesomeIcon icon={faCircleExclamation} />{error}</span>
}