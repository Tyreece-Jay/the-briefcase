import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  height: '40vh',
  backgroundColor: theme.colour.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'clip'
})

export const buttons = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '62%',
  gap: '2rem'
})

export const blend = style({
  position: 'relative',
  opacity: '10%',
  width: '175%',
  height: 'auto'
})