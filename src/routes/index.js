import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import Room from '../pages/room'
import { SocketIoProvider } from '../hook/useSocketIo'
const Routes = () => {
  const [logedIn, setLogedIn] = useState(false)

  return (
    <BrowserRouter>
      <SocketIoProvider url="http://ec2-54-201-21-116.us-west-2.compute.amazonaws.com/">
        <Switch>
          {logedIn ? (
            <>
              <Route exact path="/:id" component={Room} />
              <Route exact path="/" component={Room} />
            </>
          ) : (
            <>
              <Route
                exact
                path="/"
                component={props => <Login {...props} setLogedIn={setLogedIn} />}
              />
              <Route
                exact
                path="/:id"
                component={props => <Login {...props} setLogedIn={setLogedIn} />}
              />
            </>
          )}
        </Switch>
      </SocketIoProvider>
    </BrowserRouter>
  )
}

export default Routes
