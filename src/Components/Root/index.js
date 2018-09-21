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

import HistoryDetail from '../Workout/History/HistoryDetail/'
import HistoryWeekly from '../Workout/History/HistoryWeekly'

import ExerciseContainer from '../../Containers/Workout/ExerciseContainer/';

type Props = {
  path: string,
  check?: Boolean,
  justRegistered?: Boolean,
};

class Root extends Component<Props>{
  render(){
    const {check,justRegistered} = this.props
    if(check){
      return(
        <div>
          <HashRouter>
          {/*</BrowserRouter>*/}
            <Switch>
              <Route path="/" exact render={()=>(<Redirect to='/mainmenu'/>)} />
              <Route path="/login" exact render={()=>(<Redirect to='/mainmenu'/>)} />
              <Route path="/signup" exact render={() =>(<Redirect to='/mainmenu'/>)} />
              <Route path="/login/logindetails" exact render={()=>(<Redirect to='/mainmenu'/>)} />
              <Route path="/questionnaire" exact component={Questionnaire} />
              <Route path="/forgetpassword" exact component={ForgetPassWord} />
              <Route path="/mainmenu" exact component={MainMenuContainer}/>
              <Route path="/workout/:day" exact component={WorkoutContainer} />
              <Route path="/plan" exact component={PlanContainer}/>
              <Route path="/footer" exact component={FooterContainer} />
              <Route path="/history" exact component={HistoryContainer}/>
              <Route path="/history/:programID" exact component={HistoryWeekly}/>
              <Route path="/history/:programID/:day" exact component={HistoryDetail}/>
              <Route path="/exercise/:index?" exact component={ExerciseContainer}/>
              <Route path="/profile" exact component={ProfileContainer}/>
              <Route path="/termsandconditions" exact component={TermsAndCondComponent}/>
            </Switch>
          {/*</BrowserRouter>*/}
          </HashRouter>
        </div>
      );
    }else if(justRegistered){
      return(
        <div>
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Launch}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={SignUp} />
              <Route path="/questionnaire" exact component={Questionnaire} />
            </Switch>
          </HashRouter>
        </div>
      )
    }else {
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
              <Route path="/mainmenu" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/exercise/:index?" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/workout/:day" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/plan" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/footer" exact component={FooterContainer} />
              <Route path="/history" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/history/:programID" render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/history/:day" render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/profile" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path="/termsandconditions" exact component={TermsAndCondComponent}/>
              <Route path="/questionnaire" exact render={()=>(<Redirect to='/login/LoginDetails'/>)} />
              <Route path='/shawn' exact component={GetJson} />
            </Switch>
          {/*</BrowserRouter>*/}
          </HashRouter>
        </div>
      )
    }
  }
}



export default Root;
