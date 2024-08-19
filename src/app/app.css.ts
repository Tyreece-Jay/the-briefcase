import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "./_design/theme.css"

globalStyle('body', {
  padding: 0,
  margin: 0,
  cursor: 'crosshair',
  maxWidth: '100vw',
  backgroundColor: theme.colour.black,
  color: theme.colour.white
})

globalStyle('*', {
  padding: 0,
  margin: 0
})

// TODO: remove css modules

// TODO: have dev and prod builds
// TODO: get gh pages working
// TODO: add resend

export const footer = style({
  padding: '1rem',
  color: theme.colour.black,
  background: theme.colour.secondary,
  textAlign: 'center'
})