import React from 'react'
import Form from '../../_design/form/form'
import { Heading } from '@/app/_design/text/text'
import { section, content } from './contact.css'

export default function Contact() {
  return <section className={section}>
    <div className={content}>
      <Heading importance={2}>{'// EXPERIENCE'}</Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <Form />
  </section>
}
