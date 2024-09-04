import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.primaryLight,
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  borderRadius: '2rem 2rem 0 0'
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
  width: 'fit-content',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.secondary
  }
})

export const toast = style({
  position: 'fixed',
  left: '50%',
  top: '10%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.colour.white,
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
  zIndex: 1,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
})