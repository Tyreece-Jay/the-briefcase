'use client'

import { motion, useInView } from "framer-motion"
import { content } from "../../content"
import { useRef } from "react"
import { Button } from "../../_design/button/button"
import { Heading, Text } from "@/app/_design/text/text"
import { background, container, section } from "./about.css"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return <section id="about" className={section} ref={ref}>
    <div className={background}>
    </div>
    <motion.div className={container} drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} >
      <div>
        <Heading importance={3}>ABOUT ME</Heading>
        <Button onClick={() => { }}><Text>Send me an email</Text></Button>
      </div>
      <div>
        <Text>{content.about}</Text>
        <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </div>
    </motion.div>
  </section>
}
