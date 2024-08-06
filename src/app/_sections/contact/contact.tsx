import React from 'react'
import Form from '../../_design/form/form'
import { Heading } from '@/app/_design/text/text'
import { section, content, links, link } from './contact.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Contact() {
  return <section className={section}>
    <div className={content}>
      <div>
        <Heading importance={3} variant='primary'>Drop me a message</Heading>
        <p>Want to know more or just want to have a chat?</p>
      </div>
      <ul className={links}>
        <li><a className={link} href="url"><FontAwesomeIcon icon={faCircleUser} fixedWidth/>Request my CV</a></li>
        <li><a className={link} href="mailto: tyreece.jay@gmail.com"><FontAwesomeIcon icon={faEnvelope} fixedWidth/>tyreece.jay@gmail.com</a></li>
        <li><a className={link} href="https://linkedin.com/in/tyreece-simpson"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>tyreece-simpson</a></li>
      </ul>
    </div>
    <Form />
  </section>
}
