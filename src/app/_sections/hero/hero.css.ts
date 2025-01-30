import { theme } from "@/app/_design/theme.css"
import { style } from "@vanilla-extract/css"

export const section = style({
  height: '100vh',
  backgroundColor: theme.colour.aqua
})

export const overlay = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100vh',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0
})

export const heading = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '80%',
  gap: '2rem'
})

export const icons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem',
  transform: 'translate(0, -50%)'
})