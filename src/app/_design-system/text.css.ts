import { style } from '@vanilla-extract/css'
import { vars } from './theme'

export const h1 = style({
  fontSize: '4em',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: vars.color.black
})

export const h2 = style({
  fontSize: '3em',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: vars.color.black
})

export const h3 = style({
  fontSize: '2em',
  fontWeight: 500,
  textTransform: 'uppercase',
  color: vars.color.black
})
