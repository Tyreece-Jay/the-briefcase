import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.primaryLight,
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  borderRadius: '2rem 2rem 0 0',
  '@media': {
    'screen and (max-width: 1400px)': {
      flexDirection: 'column'
    }
  }
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  '@media': {
    'screen and (max-width: 1400px)': {
      gap: '2rem'
    }
  }
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
  left: '1vw',
  top: '1dvh',
  transform: 'translate(-50vw, -50vw)',
  backgroundColor: theme.colour.grey,
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  padding: '2rem',
  zIndex: 1,
  boxShadow: `5px 5px 10px`
})

export const toastIcon = style({
  color: theme.colour.primary,
  height: '2rem'
})

