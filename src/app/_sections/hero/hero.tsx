'use client'

import React from 'react'
import { content } from '../../content'
import { faFigma, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Particles from './particles'
import Typewriter from 'typewriter-effect'
import { IconButton, ScrollButton } from '../../_design/button/button'
import { Heading } from '../../_design/text/text'
import { heading, hero, icons, overlay } from './hero.css'

export default function Hero() {
  return <div className={hero}>
    <Particles />
    <div className={overlay}>
      <Icons />
      <div className={heading}>
        <Heading importance={1}>{content.name}</Heading>
        <Heading importance={2}><Typewriter options={{ strings: content.occupation, autoStart: true, loop: true, skipAddStyles: false }} /></Heading>
      </div>
      <ScrollButton icon={faAngleDoubleDown} href="#about" />
    </div>
  </div>
}

function Icons() {
  return <div className={icons}>
    <IconButton icon={faLinkedin} href="https://linkedin.com/in/tyreece-simpson" />
    <IconButton icon={faFigma} href="https://www.figma.com/@tyreece" />
    <IconButton icon={faGithubSquare} href="https://github.com/Tyreece-Jay" />
  </div>
}
