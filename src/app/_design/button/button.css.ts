import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

const baseButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '3rem',
  border: '2px solid',
  padding: '8px 24px',
  ':hover': {
    cursor: 'pointer'
  }
})

globalStyle(`${baseButton} *`, {
  cursor: 'pointer'
})

export const link = style({
  textDecoration: 'none'
})

export const largeLink = style({
  width: '100%',
  textDecoration: 'none'
})

export const button = style([baseButton, {
  backgroundColor: 'transparent',
  borderColor: theme.colour.black,
  color: theme.colour.black,
  display: 'flex',
  textWrap: 'nowrap',
  gap: '1rem',
  ':hover': {
    backgroundColor: theme.colour.black,
    color: theme.colour.blue,
    borderColor: theme.colour.black
  }
}])

export const largeButton = style([baseButton, {
  backgroundColor: theme.colour.navy,
  borderColor: theme.colour.navy,
  color: theme.colour.white,
  padding: '1.5rem 2rem',
  width: '100%',
  borderRadius: 0,
  ':hover': {
    color: theme.colour.blue
  },
  '@media': {
    'screen and (max-width: 600px)': {
      justifyContent: 'center'
    }
  }
}])

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

export const contentButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 900px) and (max-width: 1200px)': {
      display: 'none'
    },
    'screen and (min-width: 600px) and (max-width: 900px)': {
      display: 'flex'
    },
    'screen and (max-width: 600px)': {
      display: 'none'
    }
  }
})

export const submitButton = style([baseButton, {
  backgroundColor: 'transparent',
  borderColor: theme.colour.blue,
  color: theme.colour.blue,
  minWidth: '6rem',
  borderRadius: '0 0 1rem 0',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: theme.colour.blue,
    color: theme.colour.aqua,
    borderColor: theme.colour.blue
  },
  '@media': {
    'screen and (max-width: 800px)': {
      borderRadius: '0 0 1rem 1rem'
    }
  }
}])

export const icon = style({
  color: theme.colour.black,
  width: '3rem',
  height: '3rem',
  transition: '0.3s',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.white
  }
})

export const buttonIcon = style({
  width: '2rem',
  height: '2rem'
})