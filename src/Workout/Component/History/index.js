import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import ProgrammeList from './programmeList';
import Calendar from './calendar';
import Details from './details';

const History = () => (
  <Switch>
    <Route path="/workout/history" exact component={ProgrammeList} />
    <Route path="/workout/history/:programmeID" exact component={Calendar} />
    <Route path="/workout/history/:programmeID/:dayInWeek&:week&:index" exact component={Details} />
  </Switch>
);

export default History;
