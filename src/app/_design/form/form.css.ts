import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const form = style({
  display: 'grid',
  gridTemplateAreas: `"name email" "message message" "submit submit" "errror errror"`,
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
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.navy10,
  padding: '1rem',
  fontSize: '1rem',
  color: theme.colour.black,
  resize: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white
  }
})

export const name = style({
  gridArea: 'name',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.navy10,
  padding: '1rem',
  fontSize: '1rem',
  color: theme.colour.black,
  ':focus': {
    outline: 'none',
    backgroundColor: theme.colour.white
  }
})

export const email = style({
  gridArea: 'email',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: theme.colour.navy10,
  padding: '1rem',
  fontSize: '1rem',
  color: theme.colour.black,
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