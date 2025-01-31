import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

const baseButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '4px',
  border: '2px solid',
  padding: '0.5rem 1.5rem',
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
  borderColor: theme.colour.white,
  color: theme.colour.white,
  display: 'flex',
  textWrap: 'nowrap',
  gap: '1rem',
  ':hover': {
    backgroundColor: theme.colour.white,
    color: theme.colour.black,
    borderColor: theme.colour.white
  }
}])

export const largeButton = style([baseButton, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.colour.navy,
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
  borderRadius: '4px',
  justifyContent: 'space-between',
  gridArea: 'submit',
  ':hover': {
    backgroundColor: theme.colour.blue,
    color: theme.colour.white,
    borderColor: theme.colour.blue
  }
}])

export const icon = style({
  color: theme.colour.black,
  width: '3rem',
  height: '3rem',
  transition: '0.3s',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.blue
  }
})

export const buttonIcon = style({
  width: '2rem',
  height: '2rem'
})