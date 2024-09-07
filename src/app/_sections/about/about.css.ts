import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: '5rem 2vw 5rem 2vw',
  background: `linear-gradient(to bottom, ${theme.colour.white} 50%, transparent 50%)`
})

export const container = style({
  padding: '5rem 10vw 5rem 10vw',
  display: 'flex',
  gap: '15vw',
  flexDirection: 'row',
  backgroundColor: theme.colour.primaryLight,
  borderRadius: '2rem 0',
  color: theme.colour.black,
  '@media': {
    'screen and (max-width: 1500px)': {
      gap: '5vw'
    },
    'screen and (max-width: 1000px)': {
      flexDirection: 'column',
      gap: '5vw'
    }
  }
})

export const left = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 1000px)': {
      gap: '1rem'
    }
  }
})

export const right = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})