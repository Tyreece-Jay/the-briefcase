import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  overflow: 'hidden',
  backgroundColor: theme.color.grey,
  padding: '5em 15vw 5em 15vw',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4em',
})

export const links = style({
  listStyle: 'none',
  display: 'flex',
  gap: '1em',
  flexDirection: 'column'
})

export const link = style({
  color: theme.color.white,
  display: 'flex',
  gap: '0.25em',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    color: theme.color.secondary
  }
})