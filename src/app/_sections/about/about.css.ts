import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  width: '100%',
  height: '30rem'
})

export const background = style({
  position: 'absolute',
  backgroundColor: theme.colour.white,
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
  backgroundColor: theme.colour.secondary,
  borderRadius: '1rem',
  position: 'absolute',
  color: theme.colour.black,
  alignItems: 'center'
})