import React, { Suspense, useContext, useEffect } from 'react';
import { Route, Switch, Router, BrowserRouter, useHistory } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import PrivateRoute from './private-router'
import Orders from '@/pages/orders';
import UserContext from '@/context/user';

export default () => {
  const { state } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        {
          state.token !== '' &&
          <PrivateRoute>
            <Route exact path='/orders' >
              <Orders />
            </Route>
          </PrivateRoute>
        }
        <Route exact path='/' >
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


