'use client'

import React, { useState } from 'react'
import Form from '../../_design/form/form'
import { Heading } from '@/app/_design/text/text'
import { section, content, links, link } from './contact.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Text } from '@/app/_design/text/text'
import Link from 'next/link'
import Toast from '@/app/_design/toast/toast'

export default function Contact() {
  const [toast, setToast] = useState(false)

  return <>
    <section className={section}>
      <div className={content}>
        <div>
          <Heading importance={3}>DROP ME A MESSAGE</Heading>
          <Text>Want to know more or just have a chat?</Text>
        </div>
        <ul className={links}>
          <li><a className={link} href='mailto:tyreece.jay@gmail.com' target='_blank'><FontAwesomeIcon icon={faCircleUser} fixedWidth /><Text>Request my CV</Text></a></li>
          <li><Link className={link} target='_blank' href='mailto:tyreece.jay@gmail.com'><FontAwesomeIcon icon={faEnvelope} fixedWidth /><Text>tyreece.jay@gmail.com</Text></Link></li>
          <li><Link className={link} target='_blank' href='https://linkedin.com/in/tyreece-simpson'><FontAwesomeIcon icon={faLinkedinIn} fixedWidth /><Text>tyreece-simpson</Text></Link></li>
        </ul>
      </div>
      <Form setToast={setToast}/>
    </section>
    {toast ? <Toast /> : null}
  </>
}
