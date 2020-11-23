import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  //breakpoints: ["700px", "1024px", "1440px", "2560px"],
  fonts: {
    body: 'Barlow, system-ui, sans-serif',
    heading: 'Barlow, system-ui, sans-serif',
    mono: 'monospace, system-ui, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    h: '24px',
    p: '16px'
  },
  radii: {
    sm: '5px',
    md: '8px',
  },
  colors: {
    primary: "#78E08F",
    primaryLight: "#B8E994",
    secondary: "#FFBE00"
  },
})

export default customTheme;