import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Welcome';
import UserPage from './UserConfig';
import Questionnaire from './Questionnaire';
import MainMenu from './MainMenu';

const rootRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/user" component={UserPage} />
    <Route path="/questionnaire" component={Questionnaire} />
    <Route path="/mainmenu" component={MainMenu} />
  </Switch>
);
export default rootRouter;
