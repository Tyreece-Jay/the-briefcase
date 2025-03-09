import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%'
})

export const inputs = style({
  display: 'flex',
  gap: '0.5rem',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'column'
    }
  }
})

export const field = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
})

export const input = style({
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.black10,
  padding: '0 1.5rem',
  height: '3rem',
  fontSize: '1rem',
  color: theme.colour.white,
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white,
    color: theme.colour.black
  }
})

export const area = style({
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.black10,
  padding: '1rem 1.5rem',
  fontSize: '1rem',
  height: '8rem',
  color: theme.colour.white,
  resize: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white,
    color: theme.colour.black
  }
})

export const error = style({
  display: 'flex',
  gap: '0.5rem',
  color: theme.colour.white
})