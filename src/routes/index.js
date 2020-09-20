import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import Room from '../pages/room'

const Routes = () => {
<<<<<<< HEAD
  const logado = true;
=======
  const logado = true
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6
  return (
    <BrowserRouter>
      <Switch>
        {logado ? (
          <>
            <Route exact path="/" component={() => <h1>logado</h1>} />
            <Route path="/room/:id" component={Room} />
          </>
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
