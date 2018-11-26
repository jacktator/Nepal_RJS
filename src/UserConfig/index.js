import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Retrieve from './Component/Retrieve';

const index = () => (
  <Switch>
    <Route path="/user/Login" component={Login} />
    <Route path="/user/Register" component={Register} />
    <Route path="/user/Retrieve" component={Retrieve} />
    <Redirect from="/user/" to="/user/Login" />
  </Switch>
);

export default index;
