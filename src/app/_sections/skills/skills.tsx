'use client'

import React from 'react'
import Marquee from "react-fast-marquee"
import { content } from '../../content'
import { Heading } from '@/app/_design/text/text'
import { container, skills } from './skills.css'

export default function Skills() {
  return <section className={container}>
    <Marquee autoFill pauseOnHover>
      {content.skills.map((x, i) => <span className={skills} key={i}>
        <Heading importance={2}>{x}</Heading>
        <Heading importance={2}>{'//'}</Heading>
      </span>)}
    </Marquee>
    <Marquee autoFill pauseOnHover direction='right'>
      {content.skills.reverse().map((x, i) => <span className={skills} key={`${i}-r`}>
        <Heading importance={2}>{x}</Heading>
        <Heading importance={2}>{'//'}</Heading>
      </span>)}
    </Marquee>
  </section>
}
