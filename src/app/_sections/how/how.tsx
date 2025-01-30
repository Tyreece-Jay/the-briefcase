'use client'

import React from 'react'
import { Heading } from '@/app/_design/text/text'
import { buttons, container } from './how.css'
import { LargeButton } from '@/app/_design/button/button'
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Text } from "@/app/_design/text/text"

export default function How() {
  return <section className={container}>
    <Heading importance={3} colour='black'>WANT TO KNOW HOW I BUILT THIS WEBSITE?</Heading>
    <div className={buttons}>
      <LargeButton icon={faFigma} href='https://www.figma.com/design/IxI6aFBfIB8T9msBGShUxt/the-briefcase?node-id=0-1&t=a5xCnPY53bml0GhX-1'><Text>The Figma design</Text></LargeButton>
      <LargeButton icon={faGithub} href='https://github.com/Tyreece-Jay/the-briefcase'><Text>The GitHub repository</Text></LargeButton>
    </div>
  </section>
}
