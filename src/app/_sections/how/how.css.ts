import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: theme.colour.white,
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  gap: '2rem',
  '@media': {
    'screen and (max-width: 900px)': {
      flexDirection: 'column'
    }
  }
})