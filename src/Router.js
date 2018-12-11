import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRouter from './HOC/PrivateRouter';
import HomePage from './Welcome';
import UserPage from './UserConfig';
import Questionnaire from './Questionnaire';
import MainMenu from './MainMenu';
import Workout from './Workout';
import Rehab from './Rehab';


export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/user" component={UserPage} />
    <Route path="/questionnaire" component={Questionnaire} />
    <PrivateRouter path="/mainmenu" component={MainMenu} />
    <PrivateRouter path="/workout" component={Workout} />
    <PrivateRouter path="/rehab" component={Rehab} />
  </Switch>
);
