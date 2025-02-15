'use client'

import React, { useState } from 'react'
import Form from '../../_design/form/form'
import { Heading, TextLink } from '@/app/_design/text/text'
import { section, content, links } from './contact.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Text } from '@/app/_design/text/text'
import Toast from '@/app/_design/toast/toast'

export default function Contact() {
  const [toast, setToast] = useState(false)

  return <>
    <section className={section}>
      <Form setToast={setToast} />
      <div className={content}>
        <div>
          <Heading importance={3} colour='white'>DROP ME A MESSAGE</Heading>
          <Text style='white'>Want to know more or just have a chat?</Text>
          <Text style='white'>Get in touch by using the form or the links below.</Text>
        </div>
        <ul className={links}>
          <li><TextLink text='tyreece.jay@gmail.com' colour='white' href='mailto:tyreece.jay@gmail.com' icon={faEnvelope} /></li>
          <li><TextLink text='tyreece-simpson' colour='white' href='https://linkedin.com/in/tyreece-simpson' icon={faLinkedinIn} /></li>
        </ul>
      </div>
    </section>
    {toast ? <Toast /> : null}
  </>
}
