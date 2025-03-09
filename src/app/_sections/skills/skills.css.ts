import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  overflow: 'hidden',
  backgroundColor: theme.colour.white,
  margin: '25rem 0 6rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 1000px)': {
      margin: '30rem 0 6rem 0'
    },
    'screen and (max-width: 900px)': {
      margin: '35rem 0 6rem 0'
    },
    'screen and (max-width: 500px)': {
      margin: '35rem 0 3rem 0'
    },
    'screen and (max-width: 400px)': {
      margin: '40rem 0 3rem 0'
    }
  }
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem',
  paddingRight: '3rem',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 500px)': {
      gap: '1rem',
      paddingRight: '1rem'
    }
  }
})

export const diamond = style({
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: theme.colour.blue,
  transform: 'rotate(45deg)',
  borderRadius: '2px',
  '@media': {
    'screen and (max-width: 500px)': {
      width: '1rem',
      height: '1rem'
    }
  }
})