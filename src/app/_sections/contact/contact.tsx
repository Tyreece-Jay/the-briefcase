import React from 'react'
import Form from '../../_design/form/form'
import { Heading } from '@/app/_design/text/text'
import { section, content } from './contact.css'

export default function Contact() {
  return <section className={section}>
    <div className={content}>
      <div>
        <Heading importance={3} variant='secondary'>DROP ME A MESSAGE</Heading>
        <p>Want to know more or just want to have a chat?</p>
      </div>
      <ul>
        <li>Request my CV</li>
        <li>tyreece.jay@gmail.com</li>
        <li>tyreece-simpson</li>
      </ul>
    </div>
    <Form />
  </section>
}
