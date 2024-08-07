import { style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const button = style({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.colour.black}`,
  color: theme.colour.black,
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
    backgroundColor: theme.colour.black,
    color: theme.colour.primary,
    borderColor: theme.colour.black
  }
})

export const largeButton = style({
  backgroundColor: theme.colour.grey,
  border: `2px solid ${theme.colour.grey}`,
  color: theme.colour.white,
  padding: '12px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '1em',
  fontWeight: 500,
  fontSize: '1em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: theme.colour.secondary,
    borderColor: theme.colour.white
  }
})

export const submitButton = style({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.colour.secondary}`,
  color: theme.colour.secondary,
  padding: '12px',
  minWidth: '6em',
  borderRadius: '0 0 1em 0',
  fontWeight: 500,
  fontSize: '1em',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: theme.colour.secondary,
    color: theme.colour.black,
    borderColor: theme.colour.secondary
  }
})


export const icon = style({
  position: 'absolute',
  color: theme.colour.black,
  width: '3em',
  height: '3em',
  transition: '0.3s',
  ':hover': {
    cursor: 'pointer',
    color: theme.colour.white,
    backgroundColor: 'transparent',
  }
})

export const buttonIcon = style({
  width: '2em',
  height: '2em',
})