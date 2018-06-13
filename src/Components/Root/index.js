//@flow
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import Launch from '../Launch/';
import Login from '../../Containers/LoginDetailsContainer/';
import SignUp from '../SignUp/';
import LoginDetails from '../../Containers/LoginDetailsContainer/';
import Questionnaire from '../../Containers/QuestionnaireContainer/';
import ForgetPassWord from '../ForgetPassWord/';
//import {connect} from 'react-redux';

type Props = {
  path: string,
};

class Root extends Component<Props>{

  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Launch}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login/logindetails" exact component={LoginDetails} />
            <Route path="/questionnaire" exact component={Questionnaire} />
            <Route path="/forgetpassword" exact component={ForgetPassWord} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
