import React from 'react'
import styles from "./contact.module.css"
import Form from './form'

export default function Contact() {

  return (
    <div className={styles.container}>
      <div>
        <h2>{'// EXPERIENCE'}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <Form/>
    </div>
  )
}
