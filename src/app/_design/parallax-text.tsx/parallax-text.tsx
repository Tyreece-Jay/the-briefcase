'use client'

import React from 'react'
import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion"
import { wrap } from "@motionone/utils"
import { parallax, scroller } from './parallax-text.css'

type ParallaxProps = { direction: 'Forward' | 'backward', children: React.ReactNode }
export function ParallaxText({ direction, children }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 100000], [0, 5], { clamp: false })

  const x = useTransform(baseX, (v: number) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame(() => {
    const velocity = direction === 'Forward' ? 1 : -1
    const moveBy = directionFactor.current * velocity / 200

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    baseX.set(baseX.get() + moveBy)
  })

  return <div className={parallax}>
    <motion.div className={scroller} style={{ x }}>
      <span className={scroller}>{children}</span>
      <span className={scroller}>{children}</span>
      <span className={scroller}>{children}</span>
      <span className={scroller}>{children}</span>
    </motion.div>
  </div>
}
