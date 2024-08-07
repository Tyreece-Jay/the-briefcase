import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '5em 15vw 5em 15vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '2em'
})

export const buttons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2em'
})