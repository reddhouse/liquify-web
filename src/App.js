import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Main from './Main'
import LiquidStore from './LiquidStore'

function App() {
  return (
    <ThemeProvider theme={lcTheme}>
      <LiquidStore>
        <Main />
      </LiquidStore>
    </ThemeProvider>
  )
}

export default App

/***************************** Media Query Stuff *****************************/

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

// Iterate through the sizes and create a media template.
// Use values in styled components like ${media.phone`display: none;`} */} or,
// with a theme, ${props => props.theme.media.phone`max-height: 85vh;`}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

/***************************** Styled Components *****************************/

const lcTheme = {
  media: media,

  color1: "#fafeff",
  color2: "#f1f1f3",
  color3: "#aaabb8",
  color4: "#2e9cca",
  color5: "#29648a",
  color6: "#464866",
  color7: "#25274d",
  color8: "#191a34",
  // VoteRocker combo
  color9: "#478547",
  color10: "#bd5757"
}
