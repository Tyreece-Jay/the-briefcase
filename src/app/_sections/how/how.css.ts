import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.white,
  padding: '6rem 23rem 6rem 23rem',
  display: 'flex',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 900px)': {
      flexDirection: 'column'
    }
  }
})