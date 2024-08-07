'use client'

import { motion } from "framer-motion"
import { content } from "../../content"
import { Button } from "../../_design/button/button"
import { Heading, Text } from "@/app/_design/text/text"
import { background, container, section } from "./about.css"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function About() {
  const router = useRouter()

  return <section id="about" className={section}>
    <div className={background} />
    <motion.div className={container} drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} >
      <div>
        <Heading importance={3}>ABOUT ME</Heading>
        <Button href="mailto:tyreece.jay@gmail.com"><Text>Send me an email</Text></Button>
      </div>
      <div>
        <Text>{content.about}</Text>
        <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </div>
    </motion.div>
  </section>
}
