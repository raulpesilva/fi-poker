import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Room from '../pages/room'

const Routes = () => {
  const logado = true;
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
  );
};

export default Routes;
