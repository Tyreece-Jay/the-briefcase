import { style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const h1 = style({
  fontSize: '4em',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: theme.color.black
})

export const h2 = style({
  fontSize: '3em',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: theme.color.black
})

export const h3 = style({
  fontSize: '2em',
  fontWeight: 500,
  textTransform: 'uppercase',
  color: theme.color.black
})
