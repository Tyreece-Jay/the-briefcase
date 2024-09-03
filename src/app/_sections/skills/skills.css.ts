import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.grey,
  paddingTop: '3rem',
  paddingBottom: '4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  paddingRight: '2rem'
})