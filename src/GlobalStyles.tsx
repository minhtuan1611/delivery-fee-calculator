import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    height: 100vh;
    width: 100%;
    background-color: var(--body_background);
    color: var(--body_color);
  }
  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  @media screen and (min-width: 1560px) {
    .container {
      margin-top: 160px;
    }
  }
`

export default GlobalStyles
