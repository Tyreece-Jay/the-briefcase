import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  width: '100%',
  height: '30rem'
})

export const background = style({
  position: 'absolute',
  backgroundColor: theme.colour.grey,
  marginTop: '15rem',
  height: '15rem',
  width: '100%'
})

export const container = style({
  margin: '5rem 5vw 0 5vw',
  padding: '5% 10vw 5% 10vw',
  display: 'flex',
  gap: '10rem',
  flexDirection: 'row',
  backgroundColor: theme.colour.primaryLight,
  borderRadius: '2rem 0',
  position: 'absolute',
  color: theme.colour.black,
})

export const left = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const right = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})