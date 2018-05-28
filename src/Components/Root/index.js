import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import Launch from '../Launch/';
import Login from '../Login/';
import SignUp from '../SignUp/';
import LoginDetails from '../LoginDetails/';


export default class Root extends Component{

  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Launch}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login/logindetails" exact component={LoginDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// <Route path="/signup" exact component={SignUp} />
// </Route>
