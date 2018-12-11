import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
  const authed = sessionStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props => (authed
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/user/login', state: { from: props.location.state } }} />)}
    />
  );
};
