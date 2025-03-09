import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.white
})

export const blend = style({
  backgroundImage: 'url(/blueBlend.png)',
  backgroundPosition: 'center',
  backgroundSize: '200%',
  padding: '6rem 23rem 6rem 23rem',
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 1500px)': {
      padding: '6rem 10rem 6rem 10rem'
    },
    'screen and (max-width: 700px)': {
      backgroundSize: '400%',
      padding: '6rem'
    },
    'screen and (max-width: 400px)': {
      padding: '2rem',
      backgroundSize: '600%'
    }
  }
})

export const buttons = style({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'column'
    },
    'screen and (max-width: 400px)': {
      gap: '1rem'
    }
  }
})