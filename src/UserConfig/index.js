import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Retrieve from './Component/Retrieve';
import Profile from './Component/Profile';

const index = () => (
  <Switch>
    <Route path="/user/Login" component={Login} />
    <Route path="/user/Register" component={Register} />
    <Route path="/user/Retrieve" component={Retrieve} />
    <Route path="/user/profile" component={Profile} />
    <Redirect from="/user/" to="/user/Login" />
  </Switch>
);

export default index;
