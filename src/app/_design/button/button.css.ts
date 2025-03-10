import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

const baseButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '4px',
  border: '2px solid',
  padding: '0 1.5rem',
  height: '3rem',
  transition: '0.3s',
  gap: '1rem',
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
  width: '25rem',
  ':hover': {
    backgroundColor: theme.colour.white,
    color: theme.colour.black,
    borderColor: theme.colour.white
  },
  '@media': {
    'screen and (max-width: 800px)': {
      width: '100%'
    }
  }
}])

export const largeButton = style([baseButton, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.colour.black,
  borderColor: theme.colour.black,
  color: theme.colour.white,
  padding: '1.5rem 2rem',
  height: '10rem',
  width: '100%',
  justifyContent: 'center',
  gap: '1.5rem',
  ':hover': {
    backgroundColor: theme.colour.blue,
    color: theme.colour.white,
    borderColor: theme.colour.blue
  }
}])

export const submitButton = style([baseButton, {
  backgroundColor: 'transparent',
  borderColor: theme.colour.white,
  color: theme.colour.white,
  borderRadius: '4px',
  justifyContent: 'space-between',
  gridArea: 'submit',
  ':hover': {
    backgroundColor: theme.colour.white,
    color: theme.colour.black
  }
}])

export const icon = style({
  color: theme.colour.white,
  width: '3rem',
  height: '3rem'
})

export const buttonIcon = style({
  width: '1.25rem',
  height: '1.25rem'
})