import { createTheme } from '@vanilla-extract/css'

export const [themeClass, theme] = createTheme({
  colour: {
    black: "#0B132B",
    grey: "#1C2541",
    white: "#F6FFFD",
    primary: "#6FFFE9",
    primaryLight: "#D6FFF9",
    secondary: "#2B0AFF",
    secondaryLight: "#79A3F6",
  }
})
