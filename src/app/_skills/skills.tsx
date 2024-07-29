'use client'

import React from 'react'
import styles from "./skills.module.css"
import Marquee from "react-fast-marquee"
import { content } from '../content'

export default function Skills() {

  return (
    <div className={styles.container}>
      <Marquee autoFill pauseOnHover>
        {content.skills.map((x, i) => <span className={styles.skills} key={i}><h2>{x}</h2><h2>{'//'}</h2></span>)}
      </Marquee>
      <Marquee autoFill pauseOnHover direction='right'>
        {content.skills.reverse().map((x, i) => <span className={styles.skills} key={`${i}-r`}><h2>{x}</h2><h2>{'//'}</h2></span>)}
      </Marquee>
    </div>
  )
}
