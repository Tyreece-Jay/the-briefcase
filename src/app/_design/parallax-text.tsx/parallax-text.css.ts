import { style } from '@vanilla-extract/css'

export const parallax = style({
  overflow: 'hidden',
  margin: 0,
  display: 'flex',
  whiteSpace: 'nowrap',
  flexWrap: 'nowrap'
})

export const scroller = style({
  display: 'flex',
  whiteSpace: 'nowrap',
  flexWrap: 'nowrap'
})
