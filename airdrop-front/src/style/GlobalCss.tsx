import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  button {
    border: none;
    padding: 0;
  }

  button:hover {
    cursor: pointer;
  }

  button[disabled]:hover {
    cursor: default;
  }

  input {
    border: none;
  }

  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyle
