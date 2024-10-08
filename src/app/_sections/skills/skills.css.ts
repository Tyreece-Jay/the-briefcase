import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.grey,
  paddingTop: '3rem',
  paddingBottom: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '@media': {
    'screen and (max-width: 600px)': {
      padding: 0
    }
  }
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  paddingRight: '2rem'
})