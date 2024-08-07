import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.white,
  paddingBottom: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4rem',
  paddingRight: '2rem'
})