'use client'

import React from 'react'
import { card, cards, info, intro, section, text, heading, image } from './journey.css'
import { Heading } from '@/app/_design/text/text'
import { content, JourneyType } from '@/app/content'
import { match } from 'ts-pattern'
import { Text } from "@/app/_design/text/text"
import Image from 'next/image'

export default function Journey() {
  return <section className={section}>
    <div className={intro}>
      <Heading importance={3} colour='white'>MY JOURNEY</Heading>
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
      <Heading importance={5} colour='blue'>{journey.title}</Heading>
    </div>
    <div className={info}>
      <div className={image}>
        <Image src={journey.image} alt={journey.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={text}>
        <Text style='bold'>{journey.headline}</Text>
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