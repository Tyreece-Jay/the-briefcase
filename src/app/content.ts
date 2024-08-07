import { StaticImageData } from 'next/image'
import firstDatabank from '../../public/firstDatabank.png'
import exeterUniversity from '../../public/exeterUniversity.png'

export const content: Content = {
  name: 'Tyreece Simpson',
  occupation: ['Full-Stack Software Engineer', 'Front-End Specialist'],
  about: 'Constantly sharpening my knowledge as a full-stack developer whilst having a real passion for UI/UX design and innovation. My curios and inquisitive mindset translates extremely well to software engineering and has allowed me to become the proficient software developer I am today. Well versed in TypeScript, React, C#, .NetCore, whilst also having limited knowledge in many more.',
  skills: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'C#', 'SQL', 'UX & UI', 'Next.js', 'BDD', 'TDD', 'DevOps', 'Pair Programming', 'DDD', 'Jest', 'XState', 'StyleX', 'vanilla-extract'],
  experience: {
    type: 'Experience',
    image: firstDatabank,
    alt: 'First Databank',
    information: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  education: {
    type: 'Education',
    image: exeterUniversity,
    alt: 'The University of Exeter',
    information: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  extra: {
    type: 'Extra',
    image: firstDatabank,
    alt: 'First Databank',
    information: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
}

export type JourneyType = 'Experience' | 'Education' | 'Extra'

type Content = {
  name: string
  occupation: string[]
  about: string
  skills: string[]
  experience: Journey
  education: Journey
  extra: Journey
}

type Journey = {
  type: JourneyType
  image: StaticImageData
  alt: string
  information: string
}
