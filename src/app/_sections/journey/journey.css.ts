import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: '5rem 12vw 5rem 12vw',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',
  backgroundColor: theme.colour.navy,
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '4rem',
  borderRadius: '0 1rem',
  gap: '4rem',
  background: theme.colour.white,
  color: theme.colour.black,
  '@media': {
    'screen and (max-width: 600px)': {
      padding: '10vw'
    }
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
  gap: '4rem',
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

export const divider = style({
  height: '100px',
  width: '0',
  borderLeft: `1px solid ${theme.colour.blue}`,
  borderRight: `1px solid ${theme.colour.blue}`,
  '@media': {
    'screen and (max-width: 850px)': {
      height: '0',
      width: '50%',
      borderTop: `1px solid ${theme.colour.blue}`,
      borderBottom: `1px solid ${theme.colour.blue}`
    }
  }
})

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})
