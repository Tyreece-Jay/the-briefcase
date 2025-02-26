import { theme } from '@/app/_design/theme.css'
import { style } from '@vanilla-extract/css'

export const section = style({
  backgroundColor: theme.colour.white
})

export const blend = style({
  backgroundImage: 'url(/blueBlend.png)',
  backgroundPosition: 'center',
  backgroundSize: '200%',
  padding: '6rem 23rem 6rem 23rem',
  display: 'flex',
  justifyContent: 'center'
})

export const buttons = style({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 1605px)': {
      flexDirection: 'column'
    }
  }
})