import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Launch from '../Launch/';
import Login from '../Login/';


export default class Root extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Launch} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
