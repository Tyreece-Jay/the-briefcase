import React from 'react'
import { cardFront, cards, dot, dots, footer, intro, section } from './journey.css'
import { Heading } from '@/app/_design/text/text'
import firstDatabank from '../../../../public//firstDatabank.png'
import { JourneyType } from '@/app/content'

export default function Journey() {
  return <section className={section}>
    <div className={intro}>
      <Heading importance={3} colour='primary'>My Journey</Heading>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className={cards}>
      <JourneyCard variant='Experience'></JourneyCard>
      <JourneyCard variant='Education'></JourneyCard>
      <JourneyCard variant='Extra'></JourneyCard>
    </div>
  </section>
}

function JourneyCard({ variant }: { variant: JourneyType }) {
  return <div className={cardFront}>
    <Heading importance={5} colour='black'>{`// Experience`}</Heading>
    <img src={firstDatabank.src} alt="First Databank" />
    <div className={footer}>
      <p>Click Me</p>
      <span className={dots}>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      <span className={dot}></span>
      </span>
    </div>
  </div>
}