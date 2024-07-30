import React from 'react'
import { content } from '../../content'
import firstDatabank from '../../../../public//firstDatabank.png'
import exeterUniversity from '../../../../public/exeterUniversity.png'
import { Heading } from '@/app/_design/text/text'
import { section, experience, education, experienceContent, experienceImage, educationContent, educationImage } from './work.css'

export default function Work() {
  return <section className={section}>
    <div className={experience}>
      <div className={experienceContent}>
        <Heading importance={2}>{'// EXPERIENCE'}</Heading>
        <h4>{content.experience.company}</h4>
        <p>{content.experience.role}, {content.experience.duration}</p>
        <ul>
          <li>{content.experience.information[0]}</li>
          <li>{content.experience.information[1]}</li>
          <li>{content.experience.information[2]}</li>
        </ul>
      </div>
      <div className={experienceImage}><img src={firstDatabank.src} alt="First Databank" /></div>
    </div>
    <div className={education}>
      <div className={educationContent}>
        <Heading importance={2}>{'// EDUCATION'}</Heading>
        <h4>{content.education.university}</h4>
        <p>{content.education.course}, {content.experience.duration}</p>
        <ul>
          <li>{content.education.information}</li>
        </ul>
      </div>
      <div className={educationImage}><img src={exeterUniversity.src} alt="University of Exeter" /></div>
    </div>
  </section>
}