'use client'

import React from 'react'
import { card, cards, info, intro, section, text, heading, image, topology } from './journey.css'
import { Heading, TextLink } from '@/app/_design/text/text'
import { content, Journey as JourneyType } from '@/app/content'
import { Text } from "@/app/_design/text/text"
import Image from 'next/image'

export default function Journey() {
  return <section className={section}>
    <div className={topology}>
    <div className={intro}>
      <Heading importance={3} colour='white'>MY JOURNEY</Heading>
      <Text>{content.journey.intro}</Text>
    </div>
    <div className={cards}>
      <JourneyCard journey={content.journey.experience} />
      <JourneyCard journey={content.journey.education} />
    </div>
    </div>
  </section>
}

function JourneyCard({ journey }: { journey: JourneyType }) {
  return <div className={card}>
      <div className={image}>
        <Image src={journey.image} alt={journey.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={text}>
        <div className={heading}>
          <TextLink text={journey.title} href={journey.link} />
          <Text style='italic'>{journey.dates}</Text>
        </div>
        <Text>{journey.headline}</Text>
        <Text>{journey.info}</Text>
      </div>
  </div>
}
