import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.grey,
  padding: '5rem 15vw 5rem 15vw',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})

export const links = style({
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column'
})

export const link = style({
  color: theme.colour.white,
  textDecoration: 'underline',
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.secondary
  }
})