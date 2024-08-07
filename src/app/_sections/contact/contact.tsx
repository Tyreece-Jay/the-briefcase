'use client'

import React, { useState } from 'react'
import Form from '../../_design/form/form'
import { Heading } from '@/app/_design/text/text'
import { section, content, links, link } from './contact.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Text } from "@/app/_design/text/text"

export default function Contact() {
  const [requestSent, setRequestSent] = useState(false)
  const notify = () => {
    !requestSent && toast.error('Your request has been sent!', {
      position: "top-center",
      icon: false,
      pauseOnHover: false,
      closeOnClick: true
    })
    setRequestSent(true)
  }
  return <section className={section}>
    <div className={content}>
      <div>
        <Heading importance={3} colour='primary'>Drop me a message</Heading>
        <Text>Want to know more or just want to have a chat?</Text>
      </div>
      <ul className={links}>
        <li><a className={link} onClick={notify}><FontAwesomeIcon icon={faCircleUser} fixedWidth /><Text>Request my CV</Text></a></li>
        <li><a className={link} href="mailto: tyreece.jay@gmail.com"><FontAwesomeIcon icon={faEnvelope} fixedWidth /><Text>tyreece.jay@gmail.com</Text></a></li>
        <li><a className={link} href="https://linkedin.com/in/tyreece-simpson"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth /><Text>tyreece-simpson</Text></a></li>
      </ul>
    </div>
    <Form />
  </section>
}