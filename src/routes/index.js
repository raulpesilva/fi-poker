import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ModalProvider } from '../hook/useModal'
import Login from '../pages/login'
import Room from '../pages/room'
import Modal from '../components/Modal'
import Voting from '../components/Voting'
import SelectBoard from '../components/SelectBoard'

const Routes = () => {
  const [ logedIn, setLogedIn ] = useState(false)

  return (
    <BrowserRouter>
      <Switch>
        {logedIn ? (
          <ModalProvider modals={{ default: Modal, voting: Voting, selectBoard: SelectBoard }}>
            <Route exact path="/:id" component={Room} />
            <Route exact path="/" component={Room} />
          </ModalProvider>
        ) : (
          <>
            <Route exact path="/" component={props => <Login {...props} setLogedIn={setLogedIn}/>} />
            <Route exact path="/:id" component={props => <Login {...props} setLogedIn={setLogedIn}/>} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
