'use client'

import React from 'react'
import styles from './hero.module.css'
import { content } from '../content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faGithubSquare, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Particles from './particles'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return <div className={styles.hero}>
    <Particles />
    <div className={styles.content}>
      <Icons />
      <div className={styles.heading}>
        <h1>{content.name}</h1>
        <h3><Typewriter options={{ strings: content.occupation, autoStart: true, loop: true, skipAddStyles: false }} /></h3>
      </div>
      <IconButton icon={faAngleDoubleDown} href="#about" />
    </div>
  </div>
}

function Icons() {
  return <div className={styles.icons}>
    <IconButton icon={faLinkedin} href="https://linkedin.com/in/tyreece-simpson-287912160" newTab />
    <IconButton icon={faFigma} href="https://www.figma.com/@tyreece" newTab />
    <IconButton icon={faGithubSquare} href="https://github.com/Tyreece-Jay" newTab />
  </div>
}

function IconButton({ icon, href, newTab }: { icon: IconDefinition, href: string, newTab?: boolean }) {
  return <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} whileTap={{ scale: 0.9 }} href={href} target={newTab ? "_blank" : undefined}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </motion.a>
}