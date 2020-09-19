import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as Styled from './styles'
import theme from './assets/theme'
import Routes from './routes'
import './index.css'
import { StorageProvider } from './hook/useStorage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <StorageProvider>
        <Styled.App>
          <Routes />
        </Styled.App>
      </StorageProvider>
    </ThemeProvider>
  )
}

export default App
