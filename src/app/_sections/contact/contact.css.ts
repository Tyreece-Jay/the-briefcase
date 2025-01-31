import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.aqua,
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  '@media': {
    'screen and (max-width: 1400px)': {
      flexDirection: 'column'
    }
  }
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  '@media': {
    'screen and (max-width: 1400px)': {
      gap: '2rem'
    }
  }
})

export const links = style({
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column'
})