'use client'

import React from 'react'
import { card, cards, info, intro, section, divider, text, heading, image } from './journey.css'
import { Heading } from '@/app/_design/text/text'
import { content, JourneyType } from '@/app/content'
import { match } from 'ts-pattern'
import { Text } from "@/app/_design/text/text"
import Image from 'next/image'
import { Button } from '@/app/_design/button/button'

export default function Journey() {
  return <section className={section}>
    <div className={intro}>
      <Heading importance={3} colour='primary'>MY JOURNEY</Heading>
      <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </div>
    <div className={cards}>
      <JourneyCard type='Experience' />
      <JourneyCard type='Education' />
    </div>
  </section>
}

function JourneyCard({ type }: { type: JourneyType }) {
  const journey = JourneyContent(type)

  return <div className={card}>
    <div className={heading}>
      <Heading importance={5} colour='secondary'>{journey.title}</Heading>
      <Button href={journey.link}>View</Button>
    </div>
    <div className={info}>
      <div className={image}>
        <Image src={journey.image} alt={journey.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
        <Image unoptimized src={journey.image} alt={journey.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
      </div>
      <span className={divider} />
      <div className={text}>
        <Text bold>{journey.headline}</Text>
        <Text>{journey.information}</Text>
      </div>
    </div>
  </div>
}

function JourneyContent(type: JourneyType) {
  return match(type)
    .with('Education', () => content.education)
    .with('Experience', () => content.experience)
    .exhaustive()
}