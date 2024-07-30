'use client'

import { motion, useInView } from "framer-motion"
import { content } from "../../content"
import styles from "./about.module.css"
import { useRef } from "react"
import { Button } from "../../_design/buttons"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={styles.background}>
      </div>
      <motion.div className={styles.container} drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} >
        <div>
          <h2 className={styles.heading} style={{ transform: isInView ? "none" : "translateX(-100px)", transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }}>
            {'// ABOUT ME'}
          </h2>
          <Button onClick={() => {}}>REQUEST MY CV</Button>
        </div>
        <p>{content.about}</p>
      </motion.div>
    </section>
  )
}
