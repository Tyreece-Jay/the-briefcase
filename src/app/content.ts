export const content: Content = {
  name: 'Tyreece Simpson',
  occupation: ['Full-Stack Software Engineer', 'Front-End Specialist'],
  about: ['I am a constantly curious Senior T-Shaped Software Engineer always looking for an opportunity to learn new skills and challenge my current knowledge. I have been a full-stack developer for over 6 years and have learnt many different facets of development and leadership, whilst being most skilled in front-end development.', 'I have a real passion for front-end development, design and innovation because I love to solve user problems and bring the solution to life in innovative yet practical ways.'],
  skills: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'C#', 'SQL', 'UX', 'UI', 'Next.js', 'BDD', 'TDD', 'DevOps', 'Pair Programming', 'DDD', 'Jest', 'XState', 'StyleX', 'Vanilla Extract', 'GitHub Actions', 'Azure Devops', 'TeamCity', 'Octopus Deploy', 'Vercel'],
  journey: {
    intro: 'Below I have detailed the main two chapters within my journey; working at First Databank and studying at the University of Exeter.',
    experience: {
      title: 'First Databank',
      image: '/firstDatabank.png',
      headline: 'Apprentice to Senior Software Developer',
      dates: 'September 2018 - Present',
      info: 'Currently developing and deploying improvements to our greenfield in-house software that allows our clinicians to create clinical decision support content; created using TypeScript and C# with React and .NET frameworks. Whilst co-leading the apprenticeship program and much more.',
      link: 'https://www.fdbhealth.co.uk/'
    },
    education: {
      title: 'University of Exeter',
      image: '/exeterUniversity.png',
      headline: 'BSC Digital & Technology Solutions with proficiency in Software Engineering',
      dates: 'September 2018 - May 2022',
      info: 'Studied at the University of Exeter as an apprenticeship with First Databank. During this time I learnt many different areas within the tech world whilst specialising in software engineering.',
      link: 'https://www.exeter.ac.uk/study/degreeapprenticeships/programmes/digitalandtechnologysolutions/'
    }
  }
}

export type Journey = {
  title: string
  image: string
  headline: string
  dates: string 
  info: string
  link: string
}

type Content = {
  name: string
  occupation: string[]
  about: string[]
  skills: string[]
  journey: {
    intro: string
    experience: Journey
    education: Journey
  }
}
