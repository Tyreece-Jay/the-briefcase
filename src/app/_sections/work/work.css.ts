import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  margin: '5em 10vw 5em 10vw',
  display: 'flex',
  gap: '2em',
  flexDirection: 'column',
})

export const experience = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2em',
})

export const experienceContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '5vw',
  gap: '1em',
  backgroundColor: theme.color.grey,
  borderRadius: '2em 0 0 0',
})

export const experienceImage = style({
  padding: '5vw',
  backgroundColor: theme.color.white,
  borderRadius: '0 2em 0 0',
  display: 'flex',
  alignItems: 'center',
})

export const education = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2em',
})

export const educationContent = style({
  padding: '5vw',
  backgroundColor: theme.color.grey,
  borderRadius: '0 0 0 2em',
  display: 'flex',
  flexDirection: 'column',
})

export const educationImage = style({
  padding: '5vw',
  backgroundColor: theme.color.white,
  borderRadius: '0 0 2em 0',
  display: 'flex',
  alignItems: 'center',
})