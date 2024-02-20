import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${(props) => props.theme.primaryDark};
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

html, body {
  height: 100vh;
}


body {
  background-color: ${(props) => props.theme.primary};
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
  color: ${(props) => props.theme.textBase};
}
`