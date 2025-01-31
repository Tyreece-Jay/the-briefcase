'use client'

import { content } from '../../content'
import { Button } from '../../_design/button/button'
import { Heading, Text } from '@/app/_design/text/text'
import { container, top, bottom, section } from './about.css'

export default function About() {

  return <section id='about' className={section}>
    <div className={container}>
      <div className={top}>
        <Heading importance={3} colour='white'>ABOUT ME</Heading>
        <Button href='mailto:tyreece.jay@gmail.com'>Send me an email</Button>
      </div>
      <div className={bottom}>
        <Text>{content.about[0]}</Text>
        <Text>{content.about[1]}</Text>
      </div>
    </div>
  </section>
}
