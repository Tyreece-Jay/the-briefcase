import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.white,
  padding: '6rem 0 6rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 600px)': {
      padding: 0
    }
  }
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem',
  paddingRight: '3rem',
  alignItems: 'center'
})

export const diamond = style({
  width: '2.5rem', 
  height: '2.5rem', 
  backgroundColor: theme.colour.blue,
  transform: 'rotate(45deg)',
  borderRadius: '2px'
})