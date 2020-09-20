import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import Room from '../pages/room'

const Routes = () => {
  const [logedIn, setLogedIn] = useState(false)

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default Routes
