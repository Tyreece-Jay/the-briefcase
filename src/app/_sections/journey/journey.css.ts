import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  margin: '5em 10vw 5em 10vw',
  display: 'flex',
  gap: '2em',
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
  padding: '2em',
  borderRadius: '1em',
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
  alignItems: 'end'
})

export const dots = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '0.5em',
  width: '5em'
})

export const dot = style({
  height: '4px',
  width: '4px',
  backgroundColor: theme.colour.black,
  borderRadius: '50%',
  display: 'block'
})
