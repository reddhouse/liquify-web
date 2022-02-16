import { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import Head from "next/head"
import LiquidStore from '../lib/LiquidStore'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Liquify</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lcTheme}>
        <LiquidStore>
          <Component {...pageProps} />
        </LiquidStore>
      </ThemeProvider>
    </>
  )
}

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

const GlobalStyle = createGlobalStyle`
  html {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* font-family: 'Verdana', 'Geneva', sans-serif; */
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.4;
  }
  #__next {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

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
  color10: "#bd5757",
  color11: "#4d4d4d"
}
