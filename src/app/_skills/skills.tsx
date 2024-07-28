'use client'

import React from 'react'
import styles from "./skills.module.css"
import Marquee from "react-fast-marquee"

export function Skills({ items }: { items: string[] }) {

  return (
    <div className={styles.container}>
      <Marquee autoFill gradient gradientColor='#F5F5F5'>
        {items.map(x => <span className={styles.skills}><h2>{x}</h2><h2>{'//'}</h2></span>)}
      </Marquee>
      <Marquee autoFill gradient gradientColor='#F5F5F5' direction='right'>
        {items.reverse().map(x => <span className={styles.skills}><h2>{x}</h2><h2>{'//'}</h2></span>)}
      </Marquee>
    </div>
  )
}
