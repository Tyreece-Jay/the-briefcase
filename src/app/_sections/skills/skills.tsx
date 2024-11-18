'use client'

import React from 'react'
import { content } from '../../content'
import { Heading } from '@/app/_design/text/text'
import { container, skills } from './skills.css'
import { ParallaxText } from '@/app/_design/parallax-text.tsx/parallax-text'

export default function Skills() {
  return <section className={container}>
    <ParallaxText direction='Forward'>{content.skills.map((x, i) => <span className={skills} key={i}>
      <Heading importance={4} colour='white'>{x}</Heading>
      <Heading importance={4} colour='secondaryLight'>{'//'}</Heading>
    </span>)}</ParallaxText>
    <ParallaxText direction='backward'>{content.skills.map((x, i) => <span className={skills} key={i}>
      <Heading importance={4} colour='white'>{x}</Heading>
      <Heading importance={4} colour='secondaryLight'>{'//'}</Heading>
    </span>)}</ParallaxText>
  </section>
}
