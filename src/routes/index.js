import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ModalProvider } from '../hook/useModal'
import Login from '../pages/login'
import Room from '../pages/room'
import Modal from '../components/Modal'
import Voting from '../components/Voting'

const Routes = () => {
  const logado = true
  return (
    <BrowserRouter>
      <Switch>
        {logado ? (
          <ModalProvider modals={{ default: Modal, voting: Voting }}>
            <Route exact path="/" component={() => <h1>logado</h1>} />
            <Route path="/room/:id" component={Room} />
          </ModalProvider>
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
