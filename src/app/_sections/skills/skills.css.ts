import { theme } from '@/app/_design/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const container = style({
  overflow: 'hidden',
  backgroundColor: theme.color.white,
  paddingBottom: '5em',
  display: 'flex',
  flexDirection: 'column',
  gap: '2em'
})

export const skills = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2em',
  paddingRight: '2em'
})

globalStyle(`${skills} > h2`, {
  color: theme.color.purple,
  textTransform: 'none'
})