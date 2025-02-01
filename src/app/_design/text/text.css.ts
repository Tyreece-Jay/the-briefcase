import { style, styleVariants } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const h1 = style({
  fontSize: '15rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  color: theme.colour.blue,
  textAlign: 'center',
  lineHeight: '15rem',
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '3rem'
    }
  }
})

export const h2 = style({
  fontSize: '1.5rem',
  fontWeight: 500,
  color: theme.colour.black,
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '2rem'
    }
  }
})

const baseH3 = style({
  fontSize: '2.25rem',
  fontWeight: 900,
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '1.75rem'
    }
  }
})
export const h3 = styleVariants(theme.colour, (colour) => [baseH3, { color: colour }])

const baseH4 = style({
  fontSize: '8rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '1.75rem'
    }
  }
})
export const h4 = styleVariants(theme.colour, (colour) => [baseH4, { color: colour }])

const baseH5 = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '1.5rem'
    }
  }
})
export const h5 = styleVariants(theme.colour, (colour) => [baseH5, { color: colour }])

export const text = styleVariants({
  regular: {
    fontSize: '1rem',
    fontWeight: 400
  },
  bold: {
    fontSize: '1rem',
    fontWeight: 600
  },
  italic: {
    fontSize: '1rem',
    fontWeight: 400,
    fontStyle: 'italic'
  },
  toast: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colour.white
  }
})

export const link = style({
  color: theme.colour.blue,
  textDecoration: 'none',
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  width: 'fit-content',
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  }
})