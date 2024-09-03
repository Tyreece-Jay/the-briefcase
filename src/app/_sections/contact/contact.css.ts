import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.primaryLight,
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  flexDirection: 'row',
  gap: '8rem'
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%'
})

export const links = style({
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column'
})

export const link = style({
  color: theme.colour.black,
  textDecoration: 'underline',
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.secondary
  }
})