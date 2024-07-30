import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const form = style({
  display: 'grid',
  gridTemplateAreas: `"message message message" "name email submit" "error errror errror"`,
  gap: '0.5em',
  width: '60%'
})

export const message = style({
  width: 'auto',
  gridArea: 'message',
  height: '10em'
})

export const name = style({
  gridArea: 'name'
})

export const email = style({
  gridArea: 'email'
})

export const submit = style({
  gridArea: 'submit',
  margin: 0
})

export const error = style({
  gridArea: 'error',
  display: 'flex',
  width: 'auto',
  gap: '0.5em',
  color: theme.color.red
})