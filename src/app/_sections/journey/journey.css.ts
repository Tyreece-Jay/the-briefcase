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

const baseCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2rem',
  borderRadius: '1rem',
  cursor: 'pointer',
  width: '25%'
})

globalStyle(`${baseCard} *`, {
  cursor: 'pointer'
})

export const cardFront = style([baseCard, {
  background: theme.colour.white,
  color: theme.colour.black
}])

export const cardBack = style([baseCard, {
  background: theme.colour.grey,
  color: theme.colour.white
}])

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

export const baseDot = style({
  height: '4px',
  width: '4px',
  borderRadius: '50%',
  display: 'block',
  ':hover': {
    backgroundColor: theme.colour.primary
  }
})
export const dot = styleVariants(theme.colour, (colour) => [baseDot, { backgroundColor: colour}])