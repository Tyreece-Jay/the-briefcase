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
  textDecoration:'none'
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
    color: theme.colour.primary,
    borderColor: theme.colour.black
  }
}])

export const largeButton = style([baseButton, {
  backgroundColor: theme.colour.grey,
  borderColor: theme.colour.grey,
  color: theme.colour.white,
  padding: '1.5rem 2rem',
  width: '100%',
  borderRadius: 0,
  ':hover': {
    color: theme.colour.primary
  }
}])

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

export const submitButton = style([baseButton, {
  backgroundColor: 'transparent',
  borderColor: theme.colour.secondary,
  color: theme.colour.secondary,
  minWidth: '6rem',
  borderRadius: '0 0 1rem 0',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: theme.colour.secondary,
    color: theme.colour.primaryLight,
    borderColor: theme.colour.secondary
  }
}])

export const icon = style({
  position: 'absolute',
  color: theme.colour.black,
  width: '3rem',
  height: '3rem',
  transition: '0.3s',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.secondary
  }
})

export const buttonIcon = style({
  width: '2rem',
  height: '2rem'
})