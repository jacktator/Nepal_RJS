import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
// import PlanPage from './Component/Plan';
import DailyPage from './Component/Daily';
import ExercisePage from './Component/Exercise';

const Rehab = props => (
  <Switch>
    <Route path="/rehab/content" component={DailyPage} />
    <Route path="/rehab/training" component={ExercisePage} />
    <Redirect from="/rehab/" to="/rehab/content" />
  </Switch>
);
export default Rehab;
// <Route path="/rehab/information" component={PlanPage} />
