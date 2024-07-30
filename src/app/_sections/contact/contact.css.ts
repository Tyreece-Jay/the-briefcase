import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  overflow: 'hidden',
  backgroundColor: theme.color.grey,
  padding: '5em 15vw 5em 15vw',
  display: 'flex',
  flexDirection: 'row',
  gap: '8em'
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4em',
  width: '40%'
})
