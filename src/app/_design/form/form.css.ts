import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
  '@media': {
    'screen and (max-width: 800px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})

export const inputs = style({
  display: 'flex',
  gap: '0.5rem'
})

export const name = style({
  gridArea: 'name',
  width: '100%',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.navy10,
  padding: '0 1.5rem',
  height: '3rem',
  fontSize: '1rem',
  color: theme.colour.black,
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white
  }
})

export const email = style({
  gridArea: 'email',
  width: '100%',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.navy10,
  padding: '0 1.5rem',
  height: '3rem',
  fontSize: '1rem',
  color: theme.colour.black,
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white
  }
})

export const message = style({
  gridArea: 'message',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.navy10,
  padding: '1rem 1.5rem',
  fontSize: '1rem',
  height: '8rem',
  color: theme.colour.black,
  resize: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white
  }
})

export const error = style({
  gridArea: 'error',
  display: 'flex',
  width: 'auto',
  gap: '0.5rem',
  color: theme.colour.black
})