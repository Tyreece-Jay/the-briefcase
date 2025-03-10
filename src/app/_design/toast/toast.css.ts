import { style } from '@vanilla-extract/css'
import { theme } from '../theme.css'

export const toast = style({
  position: 'fixed',
  left: '50%',
  top: '1dvh',
  backgroundColor: theme.colour.white,
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  padding: '2rem',
  zIndex: 1,
  boxShadow: `5px 5px 10px`,
  borderRadius: '4px',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '84vw'
    }
  }
})

export const icon = style({
  color: theme.colour.blue,
  width: '1.25rem',
  height: '1.25rem'
})
