import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MainComponent from '../../../HOC/PageStructure';
import Component from './component';
import { styles } from '../../styles';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

class HistoryIndex extends React.Component {
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
    const {
      classes, theme, progress, currentWeek,
    } = this.props;
    return (
      <MainComponent
        top
        backgroundImage={theme.workoutHeader.history}
        title="Workout"
        progress={progress}
        currentWeek={currentWeek}
        currentPage={2}
        FooterContent={1}
        tapBarContent={tapBarContent}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>
              <Component />
            </Paper>
          </Grid>
        )}
      />
    );
  }
}

HistoryIndex.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default withStyles(styles, { withTheme: true })(HistoryIndex);
