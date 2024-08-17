import { theme } from '@/app/_design/theme.css'
import { globalStyle, style, styleVariants } from '@vanilla-extract/css'

export const section = style({
  margin: '5rem 10vw 5rem 10vw',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',
})

export const intro = style({
  width: '50%'
})

export const cards = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2rem',
  borderRadius: '1rem',
  cursor: 'pointer',
  width: '25%',
  background: theme.colour.white,
  color: theme.colour.black
})

globalStyle(`${card} *`, {
  cursor: 'pointer'
})

export const footer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end'
})

export const dots = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '0.5rem',
  width: '5rem'
})

const baseDot = style({
  height: '4px',
  width: '4px',
  borderRadius: '50%',
  display: 'block',
  ':hover': {
    backgroundColor: theme.colour.primary
  }
})
export const dot = styleVariants(theme.colour, (colour) => [baseDot, { backgroundColor: colour }])

export const overlay = style({
  background: theme.colour.white,
  opacity: 0.2,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

export const modalContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1
})

export const modal = style({
  borderRadius: '20px',
  width: '500px',
  height: '300px',
  background: theme.colour.white,
  color: theme.colour.black
})
