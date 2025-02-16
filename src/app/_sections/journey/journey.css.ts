import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: '6rem 23rem 6rem 23rem',
  display: 'flex',
  gap: '3rem',
  flexDirection: 'column',
  backgroundColor: theme.colour.black,
  '@media': {
    'screen and (max-width: 1050px)': {
      padding: '5rem 2vw 5rem 2vw'
    }
  }
})

export const intro = style({
  width: '50%',
  color: theme.colour.white,
  '@media': {
    'screen and (max-width: 800px)': {
      width: '100%'
    }
  }
})

export const cards = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const card = style({
  position: 'relative',
  padding: '3rem',
  borderRadius: '4px',
  gap: '3rem',
  background: theme.colour.white,
  color: theme.colour.black,
  '@media': {
    'screen and (max-width: 600px)': {
      padding: '10vw'
    }
  },
  ':before': {
    content: '',
    position: 'absolute',
    top: '125px',
    width: '40px',
    height: '40px',
    backgroundColor: theme.colour.black,
    borderRadius: '4px',
    transform: 'rotate(-45deg)',
    left: '-20px'
  },
  ':after': {
    content: '',
    position: 'absolute',
    top: '125px',
    width: '40px',
    height: '40px',
    backgroundColor: theme.colour.black,
    borderRadius: '4px',
    transform: 'rotate(-45deg)',
    right: '-20px'
  }
})

export const heading = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 600px)': {
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: '1rem'
    }
  }
})

export const info = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 850px)': {
      flexDirection: 'column',
      gap: '2rem'
    }
  }
})

export const image = style({
  width: '70vw',
  maxWidth: '280px',
  minWidth: '210px'
})

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})
