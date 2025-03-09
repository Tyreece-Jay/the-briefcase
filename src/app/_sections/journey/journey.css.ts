import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.black
})

export const topology = style({
  backgroundImage: 'url(/whiteTopology.png)',
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
    'screen and (max-width: 575px)': {
      padding: '4rem 2rem',
      backgroundSize: '600%'
    }
  }
})

export const info = style({
  display: 'flex',
  gap: '3rem',
  flexDirection: 'column',
  maxWidth: '1200px'
})

export const intro = style({
  width: '50%',
  color: theme.colour.white,
  '@media': {
    'screen and (max-width: 1000px)': {
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
  padding: '3rem',
  borderRadius: '4px',
  background: theme.colour.white,
  color: theme.colour.black,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'column'
    },
    'screen and (max-width: 575px)': {
      padding: '2rem'
    }
  }
})

export const heading = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 800px)': {
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: '1rem'
    }
  }
})

export const image = style({
  width: '70vw',
  maxWidth: '280px',
  minWidth: '210px',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '35vw'
    }
  }
})

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})
