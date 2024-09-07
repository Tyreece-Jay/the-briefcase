'use client'

import React, { useState } from 'react'
import Form from '../../_design/form/form'
import { Heading } from '@/app/_design/text/text'
import { section, content, links, link, toast, toastIcon } from './contact.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Text } from "@/app/_design/text/text"
import Link from 'next/link'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const [requestSent, setRequestSent] = useState(false)

  const toast = () => {
    setIsOpen(true)
    setRequestSent(true)
    setTimeout(() => setIsOpen(false), 3000)
  }

  return <>
    <section className={section}>
      <div className={content}>
        <div>
          <Heading importance={3}>DROP ME A MESSAGE</Heading>
          <Text>Want to know more or just have a chat?</Text>
        </div>
        <ul className={links}>
          <li><span className={link} onClick={toast}><FontAwesomeIcon icon={faCircleUser} fixedWidth /><Text>Request my CV</Text></span></li>
          <li><Link className={link} target="_blank" href="mailto:tyreece.jay@gmail.com"><FontAwesomeIcon icon={faEnvelope} fixedWidth /><Text>tyreece.jay@gmail.com</Text></Link></li>
          <li><Link className={link} target="_blank" href="https://linkedin.com/in/tyreece-simpson"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth /><Text>tyreece-simpson</Text></Link></li>
        </ul>
      </div>
      <Form />
    </section>
    {isOpen ? <Toast /> : null}
  </>
}

function Toast() {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 }, },
    exit: { y: "100vh", opacity: 0 },
  }

  return <motion.div className={toast} variants={dropIn} initial="hidden" animate="visible" exit="exit">
    <FontAwesomeIcon icon={faPaperPlane} className={toastIcon} />
    <Text style='toast'>Your request has been sent!</Text>
  </motion.div>
}