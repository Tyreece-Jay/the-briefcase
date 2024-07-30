import React from 'react'
import styles from './experience.module.css'
import { content } from '../../content'
import firstDatabank from '../../../../public/exeterUniversity.png'
import exeterUniversity from '../../../../public/exeterUniversity.png'

export default function Experience() {
  return <section className={styles.section}>
    <div className={styles.experience}>
      <div>
        <h2>{'// EXPERIENCE'}</h2>
        <h4>{content.experience.company}</h4>
        <p>{content.experience.role}, {content.experience.duration}</p>
        <ul>
          <li>{content.experience.information[0]}</li>
          <li>{content.experience.information[1]}</li>
          <li>{content.experience.information[2]}</li>
        </ul>
      </div>
      <div><img src={firstDatabank.src} alt="First Databank" /></div>
    </div>
    <div className={styles.education}>
      <div>
        <h2>{'// EDUCATION'}</h2>
        <h4>{content.education.university}</h4>
        <p>{content.education.course}, {content.experience.duration}</p>
        <ul>
          <li>{content.education.information}</li>
        </ul>
      </div>
      <div><img src={exeterUniversity.src} alt="University of Exeter" /></div>
    </div>
  </section>
}