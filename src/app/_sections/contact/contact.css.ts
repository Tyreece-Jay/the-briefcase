import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.blue,
  padding: '6rem 23rem 6rem 23rem',
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 1500px)': {
      padding: '6rem 10rem 6rem 10rem'
    },
    'screen and (max-width: 700px)': {
      padding: '6rem'
    },
    'screen and (max-width: 575px)': {
      padding: '4rem 2rem'
    }
  }
})

export const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'row',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 1605px)': {
      flexDirection: 'column-reverse'
    },
    'screen and (max-width: 575px)': {
      gap: '2rem'
    }
  }
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 575px)': {
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