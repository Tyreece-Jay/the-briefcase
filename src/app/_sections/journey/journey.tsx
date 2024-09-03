'use client'

import React from 'react'
import { card, cards, info, intro, section, divider } from './journey.css'
import { Heading } from '@/app/_design/text/text'
import { content, JourneyType } from '@/app/content'
import { match } from 'ts-pattern'
import { Text } from "@/app/_design/text/text"
import Image from 'next/image'
import { prefix } from '../../../../utils/prefix'

export default function Journey() {

  return <section className={section}>
    <div className={intro}>
      <Heading importance={3} colour='primary'>My Journey</Heading>
      <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </div>
    <div className={cards}>
      <JourneyCard type='Experience' key='Experience' />
      <JourneyCard type='Education' key='Education' />
    </div>
  </section>
}

function JourneyCard({ type }: { type: JourneyType }) {
  const journeyContent = JourneyContent(type)

  return <div className={card}>
    <Heading importance={5} colour='secondary'>{journeyContent.title}</Heading>
    <div className={info}>
    <Image src={`${prefix}${journeyContent.image}`} alt={journeyContent.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
    <span className={divider}/>
    <Text>{journeyContent.information}</Text>
    </div>
  </div>
}

function JourneyContent(type: JourneyType) {
  return match(type)
    .with('Education', () => content.education)
    .with('Experience', () => content.experience)
    .exhaustive()
}