import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Landing } from './pages/Landing'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Landing/>

      <GlobalStyle />
    </ThemeProvider>
  )
}