'use client'

import { ReactNode, useRef } from "react"
import { h1, h2, h3, h4, h5, text } from './text.css'
import { match } from "ts-pattern"
import { theme } from "../theme.css"
import { motion, useInView } from "framer-motion"

type importance = 1 | 2 | 3 | 4 | 5
export function Heading({ importance, colour = 'black', children }: { importance: importance, colour?: keyof typeof theme.colour, children: ReactNode }) {
  return match(importance)
    .with(1, () => <h1 className={h1}>{children}</h1>)
    .with(2, () => <h2 className={h2}>{children}</h2>)
    .with(3, () => <AnimatedH3 colour={colour}>{children}</AnimatedH3>)
    .with(4, () => <h4 className={h4[colour]}>{children}</h4>)
    .with(5, () => <h5 className={h5[colour]}>{children}</h5>)
    .exhaustive()
}

export function Text({ bold, children }: { bold?: boolean, children: ReactNode }) {
  return <text className={text[bold ? 'semiBold' : 'regular']}>{children}</text>
}

function AnimatedH3({ colour = 'black', children }: { colour?: keyof typeof theme.colour, children: ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return <section ref={ref}>
    <motion.h3 className={h3[colour]}
      initial={{ x: -200 }}
      animate={isInView && { x: 0 }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}>
      {children}
    </motion.h3>
  </section>
}