import { style, styleVariants } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const h1 = style({
  fontSize: '4rem',
  fontWeight: 800,
  textTransform: 'uppercase',
  color: theme.colour.black
})

export const h2 = style({
  fontSize: '3rem',
  fontWeight: 500,
  color: theme.colour.black
})

const baseH3 = style({
  fontSize: '2.25rem',
  fontWeight: 700,
})
export const h3 = styleVariants(theme.colour, (colour) => [baseH3, { color: colour }])
export const altH3 = styleVariants({ primary: [baseH3, { fontSize: '2rem', color: theme.colour.secondary }] })

const baseH4 = style({
  fontSize: '2rem',
  fontWeight: 400
})
export const h4 = styleVariants(theme.colour, (colour) => [baseH4, { color: colour }])

const baseH5 = style({
  fontSize: '2rem',
  fontWeight: 700,
})
export const h5 = styleVariants(theme.colour, (colour) => [baseH5, { color: colour }])

export const text = styleVariants({
  regular: {
    fontSize: '1.2rem',
    fontWeight: 400
  },
  semiBold: {
    fontSize: '1.2rem',
    fontWeight: 600
  }
})