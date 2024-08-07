'use client'

import React from 'react'
import { Heading } from '@/app/_design/text/text'
import { buttons, container } from './how.css'
import { Button, LargeButton } from '@/app/_design/button/button'

export default function How() {
  return <section className={container}>
    <Heading importance={3} colour='primary'>Want to know how I built this website?</Heading>
    <div className={buttons}>
      <LargeButton onClick={() => { }}>The Figma design</LargeButton>
      <LargeButton onClick={() => { }}>The GitHub repository</LargeButton>
    </div>
  </section>
}
