import { style, styleVariants } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const h1 = style({
  fontSize: '4em',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: theme.color.black
})

export const h2 = style({
  fontSize: '3em',
  fontWeight: 500,
  color: theme.color.black
})

const baseH3 = style({
  fontSize: '2em',
  fontWeight: 700,
  textTransform: 'uppercase'
})
export const h3 = styleVariants(theme.color, (variant) => [baseH3, { color: variant}])

const baseH4 = style({
  fontSize: '2em',
  fontWeight: 500,
})
export const h4 = styleVariants(theme.color, (variant) => [baseH4, { color: variant}])
