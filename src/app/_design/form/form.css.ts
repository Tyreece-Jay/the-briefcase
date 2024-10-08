import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const form = style({
  display: 'grid',
  gridTemplateAreas: `"message message message" "name email submit" "error errror errror"`,
  gap: '0.5rem',
  width: '100%',
  '@media': {
    'screen and (max-width: 800px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})

export const message = style({
  gridArea: 'message',
  height: '6rem',
  borderRadius: '1rem 1rem 0 0',
  border: `2px solid ${theme.colour.black}`,
  backgroundColor: 'transparent',
  padding: '1rem',
  fontSize: '1rem',
  color: theme.colour.black,
  resize: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  ':focus': {
    outline: `1px solid ${theme.colour.black}`
  }
})

export const name = style({
  gridArea: 'name',
  borderRadius: '0 0 0 1rem',
  border: `2px solid ${theme.colour.black}`,
  backgroundColor: 'transparent',
  padding: '1rem',
  fontSize: '1rem',
  color: theme.colour.black,
  ':focus': {
    outline: `1px solid ${theme.colour.black}`
  },
  '@media': {
    'screen and (max-width: 800px)': {
      borderRadius: 0
    }
  }
})

export const email = style({
  gridArea: 'email',
  border: `2px solid ${theme.colour.black}`,
  backgroundColor: 'transparent',
  padding: '1rem',
  fontSize: '1rem',
  color: theme.colour.black,
  ':focus': {
    outline: `1px solid ${theme.colour.black}`
  }
})

export const submit = style({
  gridArea: 'submit'
})

export const error = style({
  gridArea: 'error',
  display: 'flex',
  width: 'auto',
  gap: '0.5rem',
  color: theme.colour.secondary
})