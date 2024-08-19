'use client'

import React, { useState } from 'react'
import { card, cards, dot, dots, footer, intro, modal, modalContainer, modalContent, overlay, section } from './journey.css'
import { Heading } from '@/app/_design/text/text'
import { content, JourneyType } from '@/app/content'
import { match } from 'ts-pattern'
import { Text } from "@/app/_design/text/text"
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion'

export default function Journey() {
  const [selectedJourney, setSelectedJourney] = useState<JourneyType | undefined>()

  return <section className={section}>
    <div className={intro}>
      <Heading importance={3} colour='primary'>My Journey</Heading>
      <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </div>
    <LayoutGroup>
      <div className={cards}>
        <JourneyCard type='Experience' key='Experience' selected={selectedJourney} setSelected={setSelectedJourney}></JourneyCard>
        <JourneyCard type='Education' key='Education' selected={selectedJourney} setSelected={setSelectedJourney}></JourneyCard>
        <JourneyCard type='Extra' key='Extra' selected={selectedJourney} setSelected={setSelectedJourney}></JourneyCard>
      </div>
      <AnimatePresence>
        {selectedJourney !== undefined && (<>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            key='overlay'
            className={overlay}
            onClick={() => setSelectedJourney(undefined)}
          />
        </>)}

        {selectedJourney !== undefined && <Modal key='modal' selectedJourney={selectedJourney} setSelected={setSelectedJourney} />}
      </AnimatePresence>
    </LayoutGroup>
  </section>
}

function Modal({ selectedJourney, setSelected }: { selectedJourney: JourneyType, setSelected: (selected: JourneyType | undefined) => void }) {
  const journeyContent = JourneyContent(selectedJourney)

  return (
    <div key={`${selectedJourney}-modal`} className={modalContainer} onClick={() => setSelected(undefined)}>
      <motion.div layoutId={selectedJourney} className={modal}>
        <Heading importance={5} colour={'black'}>{`// ${journeyContent.type}`}</Heading>
        <div className={modalContent}>
          {/* <img src={journeyContent.image.src} alt={journeyContent.alt} /> */}
          <span>{journeyContent.information}</span>
        </div>
      </motion.div>
    </div>
  )
}

type JourneyCardType = { type: JourneyType, selected: JourneyType | undefined, setSelected: (selected: JourneyType | undefined) => void }
function JourneyCard({ type, selected, setSelected }: JourneyCardType) {
  const dotCount = 18
  const journeyContent = JourneyContent(type)

  return <motion.div layoutId={type} className={card} onClick={() => { selected == type ? setSelected(undefined) : setSelected(type) }}>
    <Heading importance={5} colour={'black'}>{`// ${journeyContent.type}`}</Heading>
    {/* <img src={journeyContent.image.src} alt={journeyContent.alt} /> */}
    <div className={footer}>
      <Text>Click Me</Text>
      <span className={dots}>
        {[...Array(dotCount)].map((_, i) =>
          <span key={i} className={dot[selected == type ? 'white' : 'black']}></span>)}
      </span>
    </div>
  </motion.div>
}

function JourneyContent(type: JourneyType) {
  return match(type)
    .with('Education', () => content.education)
    .with('Experience', () => content.experience)
    .with('Extra', () => content.extra)
    .exhaustive()
}