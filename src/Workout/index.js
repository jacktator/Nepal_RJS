import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MainComponent from '../HOC/PageStructure';
import { styles } from './styles';
import MidComponent from '../HOC/PageStructure/MidPart';

import PlanPage from './Component/PlanPage';
import DailyPage from './Component/Daily';
import HistoryPagy from './Component/History';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

class MainRehab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      midPartTabsValue: 0,
      currentPage: 2,
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  render() {
    const { classes } = this.props;
    return (
      <MainComponent
        backgroundImage="image/sampleImage.jpeg"
        title="Workout"
        progress={this.props.progress}
        currentWeek={this.props.currentWeek}
        currentPage={2}
        FooterContent={1}
        tapBarContent={tapBarContent}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>

              <Switch>
                <Route path="/workout/plan" component={PlanPage} />
                <Route path="/workout/daily" component={DailyPage} />
                <Route path="/workout/history" component={HistoryPagy} />
                <Redirect from="/workout/" to="/workout/plan" />
              </Switch>
            </Paper>

          </Grid>
          )}
      />
    );
  }
}

export default withStyles(styles)(MainRehab);
