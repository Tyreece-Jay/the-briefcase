import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  width: '100%',
  height: '30em'
})

export const background = style({
  position: 'absolute',
  backgroundColor: theme.color.white,
  marginTop: '15em',
  height: '15em',
  width: '100%'
})

export const container = style({
  margin: '5em 5vw 0 5vw',
  padding: '5% 10vw 5% 10vw',
  display: 'flex',
  gap: '10em',
  flexDirection: 'row',
  backgroundColor: theme.color.secondary,
  borderRadius: '1em',
  position: 'absolute',
  color: theme.color.black,
  alignItems: 'center'
})