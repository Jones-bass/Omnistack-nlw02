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

body {
  background-color: ${(props) => props.theme.primaryLighter};
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`