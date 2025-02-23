import { theme } from "@/app/_design/theme.css"
import { style } from "@vanilla-extract/css"

export const section = style({
  height: '100vh',
  backgroundColor: theme.colour.blue,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'clip'
})

export const blend = style({
  position: 'relative',
  opacity: '15%',
  width: '175%',
  height: 'auto'
})

export const heading = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  gap: '2rem'
})

export const occupation = style ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25rem'
})

export const icons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem'
})