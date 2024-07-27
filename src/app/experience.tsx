import React from 'react';
import styles from './experience.module.css'
import { content } from './content'

export default function Experience() {
  return <section className={styles.experience}>
    <h2>// MY WORK</h2>
      <div className={styles.fdbContent}>
        <div className={styles.contentText}>
          <span>
            <h4>{content.experience.company}</h4>
            <h4 className={styles.occupation}>{content.experience.role}</h4>
          </span>
          <p>{content.experience.duration}</p>
          <ul>
            <li>{content.experience.information[0]}</li>
            <li>{content.experience.information[1]}</li>
            <li>{content.experience.information[2]}</li>
          </ul>
        </div>
        <div className={styles.contentImage}>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div>
          <h4>{content.education.university}</h4>
          <h4 className={styles.occupation}>{content.education.course}</h4>
          <p>{content.education.duration}</p>
          <ul>
            <li>{content.education.information}</li>
          </ul>
        </div>
    </div>
  </section>
}