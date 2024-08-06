import { theme } from '@/app/_design/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const container = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.white,
  paddingBottom: '5em',
  display: 'flex',
  flexDirection: 'column',
  gap: '2em'
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4em',
  paddingRight: '2em'
})