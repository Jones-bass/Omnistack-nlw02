import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes/>

      <GlobalStyle />
    </ThemeProvider>
  )
}