'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from "./about.module.css"

export function Slider({items}: {items: string[]}) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className={styles.skillsContainer}>
      <motion.div className={styles.skills} animate={{ x: ['-100%', '0%'], transition: { ease: 'linear', duration: 20, repeat: Infinity } }}>
        {duplicatedItems.map((item, index) => (
          <div key={index} style={{ width: `${100 / items.length}%` }}>{item}</div>
        ))}
      </motion.div>
    </div>
  )
}
