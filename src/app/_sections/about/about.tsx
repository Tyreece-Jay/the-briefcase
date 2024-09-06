'use client'

import { motion } from "framer-motion"
import { content } from "../../content"
import { Button } from "../../_design/button/button"
import { Heading, Text } from "@/app/_design/text/text"
import { background, container, left, right, section } from "./about.css"

export default function About() {

  return <section id="about" className={section}>
    <div className={background} />
    <div className={container}>
      <div className={left}>
        <Heading importance={3}>ABOUT ME</Heading>
        <Button href="mailto:tyreece.jay@gmail.com">Send me an email</Button>
      </div>
      <div className={right}>
        <Text>{content.about}</Text>
        <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </div>
    </div>
  </section>
}
