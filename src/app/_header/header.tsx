import React from 'react'
import styles from './header.module.css'
import { content } from '../content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Particles from './particles'

export default function Header() {
  return <div className={styles.header}>
      <Particles />
      <Icons />
      <div className={styles.content}>
        <h1>{content.name}</h1>
        <h3>{content.occupation.primary} // {content.occupation.secondary}</h3>
      </div>
      <a href="#about"><FontAwesomeIcon icon={faAngleDoubleDown} className={styles.icon} /></a>
    </div>
}

function Icons() {
  return <div className={styles.icons}>
    <a target="_blank" href="https://linkedin.com/in/tyreece-simpson-287912160"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></a>
    <a target="_blank" href="https://www.figma.com/@tyreece"><FontAwesomeIcon icon={faFigma} className={styles.icon} /></a>
    <a target="_blank" href="https://github.com/Tyreece-Jay"><FontAwesomeIcon icon={faGithubSquare} className={styles.icon} /></a>
  </div>
}