//@flow
import React, {Component} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
//BrowserRouter
import 'antd-mobile/dist/antd-mobile.css';
import Launch from '../Launch/';
import Login from '../Login/';
import SignUp from '../../Containers/SignUpContainer/';
import LoginDetails from '../../Containers/LoginDetailsContainer/';
import Questionnaire from '../../Containers/QuestionnaireContainer/';
import ForgetPassWord from '../../Containers/ForgetPasswordContainer/';
import WorkoutContainer from '../../Containers/Workout/WorkoutContainer';
import FooterContainer from '../../Containers/Workout/FooterContainer';
import PlanContainer from '../../Containers/Workout/PlanContainer';
import HistoryContainer from '../../Containers/Workout/HistoryContainer';
import MainMenuContainer from '../../Containers/MainMenuContainer';
import ProfileContainer from '../../Containers/ProfileContainer';
import TermsAndCondComponent from '../TermsAndCond';
import GetJson from '../../Containers/ZShawn';

//import {connect} from 'react-redux';
import ExerciseContainer from '../../Containers/Workout/ExerciseContainer/';

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
          <HashRouter>
          {/*<BrowserRouter>*/}
            <Switch>
              <Route path="/" exact component={Launch}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={SignUp} />
              <Route path="/login/logindetails" exact component={LoginDetails} />
              <Route path="/forgetpassword" exact component={ForgetPassWord} />
              <Route path="/mainmenu" exact component={MainMenuContainer}/>
              <Route path="/exercise:index?" exact component={ExerciseContainer}/>
              <Route path="/workout/:day?" exact component={WorkoutContainer} />
              <Route path="/plan" exact component={PlanContainer}/>
              <Route path="/footer" exact component={FooterContainer} />
              <Route path="/history" exact component={HistoryContainer}/>
              <Route path="/profile" exact component={ProfileContainer}/>
              <Route path="/termsandconditions" exact component={TermsAndCondComponent}/>
              <Route path="/questionnaire" exact component={Questionnaire} />
              <Route path='/shawn' exact component={GetJson} />
            </Switch>
          {/*</BrowserRouter>*/}
          </HashRouter>
        </div>
      )
    }
    return(
      <div>
        <HashRouter>
      {/*</BrowserRouter>*/}
          <Switch>
            <Route path="/" exact render={()=>(<Redirect to='/mainmenu'/>)} />
            <Route path="/login" exact render={()=>(<Redirect to='/mainmenu'/>)} />
            <Route path="/signup" exact render={()=>(<Redirect to='/mainmenu'/>)} />
            <Route path="/login/logindetails" exact render={()=>(<Redirect to='/mainmenu'/>)} />
            <Route path="/questionnaire" exact component={Questionnaire} />
            <Route path="/forgetpassword" exact component={ForgetPassWord} />
            <Route path="/mainmenu" exact component={MainMenuContainer}/>
            <Route path="/workout/:day" exact component={WorkoutContainer} />
            <Route path="/plan" exact component={PlanContainer}/>
            <Route path="/footer" exact component={FooterContainer} />
            <Route path="/history" exact component={HistoryContainer}/>
            <Route path="/exercise" exact component={ExerciseContainer}/>
            <Route path="/profile" exact component={ProfileContainer}/>
            <Route path="/termsandconditions" exact component={TermsAndCondComponent}/>
          </Switch>
        {/*</BrowserRouter>*/}
        </HashRouter>
      </div>
    );
  }
}

export default Root;
