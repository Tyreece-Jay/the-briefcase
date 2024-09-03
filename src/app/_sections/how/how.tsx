'use client'

import React from 'react'
import { Heading } from '@/app/_design/text/text'
import { buttons, container } from './how.css'
import { LargeButton } from '@/app/_design/button/button'
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Text } from "@/app/_design/text/text"

export default function How() {
  return <section className={container}>
    <Heading importance={5} colour='secondary'>WANT TO KNOW HOW I BUILT THIS WEBSITE?</Heading>
    <div className={buttons}>
      <LargeButton icon={faFigma} onClick={() => { }}><Text>The Figma design</Text></LargeButton>
      <LargeButton icon={faGithub} onClick={() => { }}><Text>The GitHub repository</Text></LargeButton>
    </div>
  </section>
}
