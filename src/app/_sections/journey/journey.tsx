'use client'

import React, { useState } from 'react'
import { cardBack, cardFront, cards, dot, dots, footer, intro, section } from './journey.css'
import { Heading } from '@/app/_design/text/text'
import { content, JourneyType } from '@/app/content'
import { match } from 'ts-pattern'

export default function Journey() {
  const [selectedJourney, setSelectedJourney] = useState<JourneyType | undefined>()
  console.log(selectedJourney)
  return <section className={section}>
    <div className={intro}>
      <Heading importance={3} colour='primary'>My Journey</Heading>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className={cards}>
      <JourneyCard type='Experience' selected={selectedJourney} setSelected={setSelectedJourney}></JourneyCard>
      <JourneyCard type='Education' selected={selectedJourney} setSelected={setSelectedJourney}></JourneyCard>
      <JourneyCard type='Extra' selected={selectedJourney} setSelected={setSelectedJourney}></JourneyCard>
    </div>
  </section>
}

type CardType = { type: JourneyType, selected: JourneyType | undefined, setSelected: (selected: JourneyType | undefined) => void }
function JourneyCard({ type, selected, setSelected }: CardType) {
  const dotCount = 18
  const card = match(type)
    .with('Education', () => content.education)
    .with('Experience', () => content.experience)
    .with('Extra', () => content.extra)
    .exhaustive()

  return <div className={selected == type ? cardBack : cardFront} onClick={() => {selected == type ? setSelected(undefined) : setSelected(type)}}>
    <Heading importance={5} colour={selected == type ? 'secondary' : 'black'}>{`// ${card.type}`}</Heading>
    {selected == type ? <p>{card.information}</p> : <img src={card.image.src} alt={card.alt} />}
    <div className={footer}>
      <p>Click Me</p>
      <span className={dots}>
        {[...Array(dotCount)].map((_, i) =>
          <span key={i} className={dot[selected == type ? 'white' : 'black']}></span>)}
      </span>
    </div>
  </div>
}