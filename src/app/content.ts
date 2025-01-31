export const content: Content = {
  name: 'Tyreece Simpson',
  occupation: ['Full-Stack Software Engineer', 'Front-End Specialist'],
  about: ['I am a constantly curious Senior T-Shaped Software Engineer always looking for an opportunity to learn new skills and challenge my current knowledge. I have been a full-stack developer for over 6 years and have learnt many different facets of development and leadership, whilst being most skilled in front-end development.', 'I have a real passion for front-end development, design and innovation because I love to solve user problems and bring the solution to life in innovative yet practical ways.'],
  skills: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'C#', 'SQL', 'UX', 'UI', 'Next.js', 'BDD', 'TDD', 'DevOps', 'Pair Programming', 'DDD', 'Jest', 'XState', 'StyleX', 'Vanilla Extract', 'GitHub Actions', 'Azure Devops', 'TeamCity', 'Octopus Deploy', 'Vercel'],
  experience: {
    type: 'Experience',
    title: 'First Databank',
    image: '/firstDatabank.png',
    headline: 'Senior Software Developer, July 2022 - Present',
    information: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://www.fdbhealth.co.uk/'
  },
  education: {
    type: 'Education',
    title: 'University of Exeter',
    image: '/exeterUniversity.png',
    headline: 'BSC Digital & Technology Solutions with proficiency in Software Engineering, September 2018 - May 2022',
    information: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://www.exeter.ac.uk/study/degreeapprenticeships/programmes/digitalandtechnologysolutions/'
  }
}

export type JourneyType = 'Experience' | 'Education'

type Content = {
  name: string
  occupation: string[]
  about: string[]
  skills: string[]
  experience: Journey
  education: Journey
}

type Journey = {
  type: JourneyType
  title: string
  image: string
  headline: string
  information: string
  link: string 
}
