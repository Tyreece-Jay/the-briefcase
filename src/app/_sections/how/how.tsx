'use client'

import React from 'react'
import { blend, buttons, section } from './how.css'
import { LargeButton } from '@/app/_design/button/button'
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Text } from "@/app/_design/text/text"
import Image from 'next/image'

export default function How() {
  return <section className={section}>
    <Image className={blend} src={'/blueBlend.png'} alt={'Blend'} width={0} height={0} />
    <div className={buttons}>
      <LargeButton icon={faFigma} href='https://www.figma.com/design/IxI6aFBfIB8T9msBGShUxt/the-briefcase?node-id=0-1&t=a5xCnPY53bml0GhX-1'><Text style='bold'>The Figma design</Text></LargeButton>
      <LargeButton icon={faGithub} href='https://github.com/Tyreece-Jay/the-briefcase'><Text style='bold'>The GitHub repository</Text></LargeButton>
    </div>
  </section>
}
