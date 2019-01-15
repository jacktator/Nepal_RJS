import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRouter from './HOC/PrivateRouter';
import HomePage from './Welcome';
import UserPage from './UserConfig';
import Questionnaire from './Questionnaire';
import MainMenu from './MainMenu';
import Workout from './Workout';
import Rehab from './Rehab';
import Logout from './HOC/Logout';


export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/user" component={UserPage} />
    <PrivateRouter path="/questionnaire" component={Questionnaire} />
    <PrivateRouter path="/mainmenu" component={MainMenu} />
    <PrivateRouter path="/workout" component={Workout} />
    <PrivateRouter path="/rehab" component={Rehab} />
    <Route path="/logout" component={Logout} />
  </Switch>
);
