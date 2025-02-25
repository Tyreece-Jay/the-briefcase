'use client'

import React from 'react'
import { content } from '../../content'
import { faFigma, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Button, IconButton } from '../../_design/button/button'
import { Heading, Text } from '../../_design/text/text'
import { heading, section, icons, occupation, blend, about, top, bottom } from './hero.css'

export default function Hero() {
  return <section className={section}>
    <div className={blend}>
      <div className={heading}>
        <Heading importance={1} colour='white'>{content.name}</Heading>
        <div className={occupation}>
          <Heading importance={2} colour='white'>{content.occupation[0]}</Heading>
          <Heading importance={2} colour='white'>{content.occupation[1]}</Heading>
        </div>
        <Icons />
      </div>

      <div className={about}>
        <div className={top}>
          <Heading importance={3} colour='white'>ABOUT ME</Heading>
          <Button href='mailto:tyreece.jay@gmail.com'>Send me an email</Button>
        </div>
        <div className={bottom}>
          <Text>{content.about[0]}</Text>
          <Text>{content.about[1]}</Text>
        </div>
      </div>
    </div>
  </section>
}

function Icons() {
  return <div className={icons}>
    <IconButton iconDef={faLinkedin} href="https://linkedin.com/in/tyreece-simpson" />
    <IconButton iconDef={faFigma} href="https://www.figma.com/@tyreece" />
    <IconButton iconDef={faGithubSquare} href="https://github.com/Tyreece-Jay" />
  </div>
}
