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

export const about = style({
  padding: '6vh 3rem',
  margin: '0 23rem',
  display: 'flex',
  gap: '3rem',
  flexDirection: 'column',
  backgroundColor: theme.colour.black,
  borderRadius: '4px',
  color: theme.colour.white,
  position: 'absolute',
  top: '94vh'
})

export const top = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 1000px)': {
      gap: '1rem'
    }
  }
})

export const bottom = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})