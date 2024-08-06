import { style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const button = style({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.color.black}`,
  color: theme.color.black,
  padding: '12px',
  textAlign: 'center',
  minWidth: '16em',
  borderRadius: '1em',
  fontWeight: 500,
  fontSize: '1em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: theme.color.black,
    color: theme.color.primary,
    borderColor: theme.color.black
  }
})

export const submitButton = style({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.color.secondary}`,
  color: theme.color.secondary,
  padding: '12px',
  minWidth: '6em',
  borderRadius: '0 0 1em 0',
  fontWeight: 500,
  fontSize: '1em',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: theme.color.secondary,
    color: theme.color.black,
    borderColor: theme.color.secondary
  }
})


export const icon = style({
  position: 'absolute',
  color: theme.color.black,
  width: '3em',
  height: '3em',
  transition: '0.3s',
  ':hover': {
    cursor: 'pointer',
    color: theme.color.white,
    backgroundColor: 'transparent',
  }
})

export const buttonIcon = style({
  width: '2em',
  height: '2em',
})