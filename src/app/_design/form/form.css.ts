import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const form = style({
  display: 'grid',
  gridTemplateAreas: `"message message message" "name email submit" "error errror errror"`,
  gap: '0.5em',
})

export const message = style({
  gridArea: 'message',
  height: '10em',
  borderRadius: '1em 1em 0 0',
  border: `2px solid ${theme.color.white}`,
  backgroundColor: 'transparent',
  padding: '1em',
  color: theme.color.white,
  ':focus': {
    outline: `1px solid ${theme.color.white}`
  }
})

export const name = style({
  gridArea: 'name',
  borderRadius: '0 0 0 1em',
  border: `2px solid ${theme.color.white}`,
  backgroundColor: 'transparent',
  padding: '1em',
  color: theme.color.white,
  ':focus': {
    outline: `1px solid ${theme.color.white}`
  }
})

export const email = style({
  gridArea: 'email',
  border: `2px solid ${theme.color.white}`,
  backgroundColor: 'transparent',
  padding: '1em',
  color: theme.color.white,
  ':focus': {
    outline: `1px solid ${theme.color.white}`
  }
})

export const submit = style({
  gridArea: 'submit',
  borderRadius: '0 0 1em 0'
})

export const error = style({
  gridArea: 'error',
  display: 'flex',
  width: 'auto',
  gap: '0.5em',
  color: theme.color.primary
})