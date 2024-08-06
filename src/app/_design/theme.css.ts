import { createTheme } from '@vanilla-extract/css'

export const [themeClass, theme] = createTheme({
  colour: {
    black: "#353131",
    grey: "#4D4847",
    white: "#F5F5F5",
    primary: "#FD7B6E",
    secondary: "#FECA91",
    tertiary: "#BE57A3"
  }
})
