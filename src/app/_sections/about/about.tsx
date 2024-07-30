'use client'

import { motion, useInView } from "framer-motion"
import { content } from "../../content"
import { useRef } from "react"
import { Button } from "../../_design/button/button"
import { Heading } from "@/app/_design/text/text"
import { background, container, section } from "./about.css"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return <section id="about" className={section} ref={ref}>
    <div className={background}>
    </div>
    <motion.div className={container} drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} >
      <div>
        <Heading importance={2}>{'// ABOUT ME'}</Heading>
        <Button onClick={() => { }}>REQUEST MY CV</Button>
      </div>
      <p>{content.about}</p>
    </motion.div>
  </section>
}
