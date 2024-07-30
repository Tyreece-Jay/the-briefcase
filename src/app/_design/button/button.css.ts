import { style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const button = style({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.color.red}`,
  padding: '15px',
  textAlign: 'center',
  minWidth: '16em',
  borderRadius: '4px',
  fontWeight: 600,
  ':hover': {
    cursor: 'pointer',
    backgroundColor: theme.color.red
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
