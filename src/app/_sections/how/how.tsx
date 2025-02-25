'use client'

import React from 'react'
import { blend, section } from './how.css'
import { LargeButton } from '@/app/_design/button/button'
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function How() {
  return <section className={section}>
    <div className={blend}>
      <LargeButton icon={faFigma} href='https://www.figma.com/design/IxI6aFBfIB8T9msBGShUxt/the-briefcase?node-id=0-1&t=a5xCnPY53bml0GhX-1'>The Figma design</LargeButton>
      <LargeButton icon={faGithub} href='https://github.com/Tyreece-Jay/the-briefcase'>The GitHub repository</LargeButton>
    </div>
  </section>
}
