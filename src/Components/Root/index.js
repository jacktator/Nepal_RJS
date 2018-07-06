//@flow
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import Launch from '../Launch/';
import Login from '../Login/';
import SignUp from '../../Containers/SignUpContainer/';
import LoginDetails from '../../Containers/LoginDetailsContainer/';
import Questionnaire from '../../Containers/QuestionnaireContainer/';
import ForgetPassWord from '../../Containers/ForgetPasswordContainer/';
import Workout from '../../Containers/Workout/Workout';
import FooterContainer from '../../Containers/Workout/FooterContainer';
import Plan from '../../Components/Workout/Plan';

//import {connect} from 'react-redux';
import ExcerciseContainer from '../../Containers/ExcerciseContainer/';

type Props = {
  path: string,
  check?: Boolean,
};

class Root extends Component<Props>{
  render(){
    const {check} = this.props

    if(!check){
      return(
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Launch}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={SignUp} />
              <Route path="/questionnaire" exact render={()=>(<Redirect to='/login/logindetails'/>)}/>
              <Route path="/login/logindetails" exact component={LoginDetails} />
              <Route path="/forgetpassword" exact component={ForgetPassWord} />
              <Route path="/excercise" exact component={ExcerciseContainer}/>
              <Route path="/workout" exact component={Workout} />
              <Route path="/plan" exact component={Plan}/>
              <Route path="/footer" exact component={FooterContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      )
    }
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Launch}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login/logindetails" exact render={()=>(<Redirect to='/questionnaire'/>)}/>
            <Route path="/questionnaire" exact component={Questionnaire} />
            <Route path="/forgetpassword" exact component={ForgetPassWord} />
            <Route path="/plan" exact component={Plan}/>
            <Route path="/workout" exact component={Workout} />
            <Route path="/footer" exact component={FooterContainer} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
