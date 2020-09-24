import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as Styled from './styles'
import theme from './assets/theme'
import Routes from './routes'
import './index.css'
import { GlobalStateProvider } from './hook/useGlobalState'
import { ModalProvider } from './hook/useModal'
import Modal from './components/Modal'
import Voting from './components/Voting'
import SelectBoard from './components/SelectBoard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <GlobalStateProvider>
        <ModalProvider modals={{ default: Modal, voting: Voting, selectBoard: SelectBoard }}>
          <Styled.App>
            <Routes />
          </Styled.App>
        </ModalProvider>
      </GlobalStateProvider>
    </ThemeProvider>
  )
}

export default App
