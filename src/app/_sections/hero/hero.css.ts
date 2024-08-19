import { keyframes, style } from "@vanilla-extract/css"

const gradiant = keyframes({
  '0%': { backgroundPosition: '0% 53%' },
  '50%': { backgroundPosition: '100% 48%' },
  '100%': { backgroundPosition: '0% 53%' }
})

export const section = style({
  width: '100%',
  height: '30rem'
})

export const hero = style({
  height: '100vh',
  width: '100%',
  backgroundImage: 'url("/hero.jpg")',
  backgroundSize: '125% 125%',
  animation: `${gradiant} 45s ease infinite`,
})

export const overlay = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100vh'
})

export const heading = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '100%',
  marginLeft: '20%'
})

export const icons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '6em',
  top: '20%',
  left: '50%',
  transform: 'translate(0%, -50%)'
})

export const particles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
})
