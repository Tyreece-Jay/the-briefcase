import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const buttons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem'
})