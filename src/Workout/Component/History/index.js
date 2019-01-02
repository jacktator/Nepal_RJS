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
    <Route path="/workout/history/:programmeID" component={Calendar} />
    <Route path="/workout/history/:programmeID/:dayInWeek" component={Details} />
  </Switch>
);

export default History;
