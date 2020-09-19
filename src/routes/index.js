import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/login';

const Routes = () => {
  const logado = false;
  return (
    <BrowserRouter>
      <Switch>
        {logado ? (
          <>
            <Route exact path="/" component={() => <h1>logado</h1>} />
            <Route path="/teste" component={() => <h1>testes</h1>} />
          </>
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
