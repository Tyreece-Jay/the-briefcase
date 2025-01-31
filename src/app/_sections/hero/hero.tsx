'use client'

import React from 'react'
import { content } from '../../content'
import { faFigma, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconButton } from '../../_design/button/button'
import { Heading } from '../../_design/text/text'
import { heading, section, icons, overlay, occupation } from './hero.css'

export default function Hero() {
  return <section className={section}>
    <div className={overlay}>
      <div className={heading}>
        <Heading importance={1}>{content.name}</Heading>
        <div className={occupation}>
          <Heading importance={2}>{content.occupation[0]}</Heading>
          <Heading importance={2}>{content.occupation[1]}</Heading>
        </div>
        <Icons />
      </div>
    </div>
  </section>
}

function Icons() {
  return <div className={icons}>
    <IconButton icon={faLinkedin} href="https://linkedin.com/in/tyreece-simpson" />
    <IconButton icon={faFigma} href="https://www.figma.com/@tyreece" />
    <IconButton icon={faGithubSquare} href="https://github.com/Tyreece-Jay" />
  </div>
}
