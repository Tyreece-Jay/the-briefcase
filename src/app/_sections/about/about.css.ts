import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  background: theme.colour.white
})

export const container = style({
  padding: '3rem',
  margin: '0 23rem',
  display: 'flex',
  gap: '3rem',
  flexDirection: 'column',
  backgroundColor: theme.colour.black,
  borderRadius: '4px',
  color: theme.colour.white,
  position: 'absolute',
  top: '100vh'
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