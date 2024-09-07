import { style } from "@vanilla-extract/css"

export const section = style({
  height: '100vh'
})

export const overlay = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100vh',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0
})

export const heading = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '80%'
})

export const icons = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '6em',
  top: '20%',
  left: '50%',
  transform: 'translate(0%, -50%)'
})