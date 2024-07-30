import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const h1 = style({
  fontSize: '4em',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: vars.color.black
})