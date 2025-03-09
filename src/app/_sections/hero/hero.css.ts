import { theme } from "@/app/_design/theme.css"
import { keyframes, style } from "@vanilla-extract/css"

const gradiant = keyframes({
  '0%': { backgroundPosition: '50% 55%' },
  '50%': { backgroundPosition: '55% 50%' },
  '100%': { backgroundPosition: '50% 55%' }
})

export const section = style({
  backgroundColor: theme.colour.blue
})

export const blend = style({
  backgroundImage: 'url(/whiteBlend.png)',
  backgroundPosition: 'center',
  backgroundSize: '200%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${gradiant} 30s ease infinite`,
  '@media': {
    'screen and (max-width: 700px)': {
      backgroundSize: '400%'
    },
    'screen and (max-width: 400px)': {
      backgroundSize: '600%'
    }
  }
})

export const heading = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  maxWidth: '1200px',
  gap: '2rem'
})

export const occupation = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25rem'
})

export const icons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem'
})

export const about = style({
  padding: '6vh 3rem',
  margin: '0 23rem',
  display: 'flex',
  gap: '3rem',
  flexDirection: 'column',
  backgroundColor: theme.colour.black,
  borderRadius: '4px',
  color: theme.colour.white,
  position: 'absolute',
  maxWidth: '1200px',
  top: '94vh',
  '@media': {
    'screen and (max-width: 1500px)': {
      margin: '0 10rem'
    },
    'screen and (max-width: 700px)': {
      margin: '0 6rem'
    },
    'screen and (max-width: 575px)': {
      padding: '6vh 2rem',
      margin: '0 2rem'
    }
  }
})

export const top = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-start'
    }
  }
})

export const bottom = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})