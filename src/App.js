import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as Styled from './styles'
import theme from './assets/theme'
import Routes from './routes'
import './index.css'
import { StorageProvider } from './hook/useStorage'
import { ModalProvider } from './hook/useModal'
import Modal from './components/Modal'
import Voting from './components/Voting'
import SelectBoard from './components/SelectBoard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />

      <StorageProvider>
        <ModalProvider modals={{ default: Modal, voting: Voting, selectBoard: SelectBoard }}>
          <Styled.App>
            <Routes />
          </Styled.App>
        </ModalProvider>
      </StorageProvider>
    </ThemeProvider>
  )
}

export default App
