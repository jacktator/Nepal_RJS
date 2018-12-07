import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import PlanPage from './Component/Plan';
import DailyPage from './Component/Daily';
import HistoryPage from './Component/History';
import ExercisePage from './Component/Exercise';

const Workout = () => (
  <Switch>
    <Route path="/workout/plan" component={PlanPage} />
    <Route path="/workout/daily" component={DailyPage} />
    <Route path="/workout/history" component={HistoryPage} />
    <Route path="/workout/exercise" component={ExercisePage} />
    <Redirect from="/workout/" to="/workout/plan" />
  </Switch>
);

export default Workout;
