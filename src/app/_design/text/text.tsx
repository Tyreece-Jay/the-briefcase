'use client'

import { ReactNode, useRef } from "react"
import { h1, h2, h3, h4, text, link } from './text.css'
import { match } from "ts-pattern"
import { theme } from "../theme.css"
import { motion, useInView } from "framer-motion"
import { Big_Shoulders_Display, Big_Shoulders_Text } from 'next/font/google'
import Link from 'next/link'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const bgDisplay = Big_Shoulders_Display({ subsets: ['latin'] })
const bgText = Big_Shoulders_Text({ subsets: ['latin'] })

type importance = 1 | 2 | 3 | 4
export function Heading({ importance, colour = 'black', children }: { importance: importance, colour?: keyof typeof theme.colour, children: ReactNode }) {
  return match(importance)
    .with(1, () => <h1 className={`${h1[colour]} ${bgDisplay.className}`}>{children}</h1>)
    .with(2, () => <h2 className={h2[colour]}>{children}</h2>)
    .with(3, () => <AnimatedH3 colour={colour}>{children}</AnimatedH3>)
    .with(4, () => <h4 className={`${h4[colour]} ${bgDisplay.className}`}>{children}</h4>)
    .exhaustive()
}

type style = 'regular' | 'white' | 'bold' | 'italic'
export function Text({ style = 'regular', children }: { style?: style, children: ReactNode }) {
  return <p className={text[style]}>{children}</p>
}

export function TextLink({ text, colour = 'blue', href, icon }: { text: string, colour?: keyof typeof theme.colour, href: string, icon?: IconDefinition }) {
  return <Link className={link[colour]} target='_blank' href={href}>
    {icon ? <FontAwesomeIcon icon={icon} fixedWidth /> : null}
    <Text style='bold'>{text}</Text>
  </Link>
}

function AnimatedH3({ colour = 'black', children }: { colour?: keyof typeof theme.colour, children: ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return <section ref={ref}>
    <motion.h3 className={`${h3[colour]} ${bgText.className}`}
      initial={{ x: -200 }}
      animate={isInView && { x: 0 }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}>
      {children}
    </motion.h3>
  </section>
}