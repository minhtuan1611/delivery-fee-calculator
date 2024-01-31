import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  :root {
    --body_background: linear-gradient(45deg, #fff, #18a8d0, #e784e0);
    --body_color: black;
    --body_form: white;
    --button_hover: #3799e4;
    --button_border: #25c1ed;
  }

  [data-theme='dark'] {
    --body_background: linear-gradient(45deg, #1f2544, #474f7a, #81689d);
    --body_color: white;
    --body_form: #1f2544;
    --button_hover: #ffd0ec;
    --button_border: #81689d;
  }

  * {
    transition: all 0.1s ease;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--body_background);
    color: var(--body_color);
    background-size: 300% 300%;
    animation: color 8s ease-in-out infinite;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
