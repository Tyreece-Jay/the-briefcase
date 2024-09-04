import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',
  backgroundColor: theme.colour.grey
})

export const intro = style({
  width: '50%',
  color: theme.colour.white
})

export const cards = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '4rem',
  borderRadius: '0 1rem',
  gap: '4rem',
  background: theme.colour.white,
  color: theme.colour.black
})

export const heading = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  justifyContent: 'space-between'
})

export const info = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4rem'
})

export const image = style({
  width: '70vw',
  maxWidth: '280px'
})

export const divider = style({
  height: '100px',
  borderLeft: `1px solid ${theme.colour.primary}`,
  borderRight: `1px solid ${theme.colour.primary}`
})

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})
