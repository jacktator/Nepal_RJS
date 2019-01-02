import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import MainComponent from '../../../../HOC/PageStructure';
import Component from './component';
import { styles } from '../../../styles';
import { getExerciseHistory } from '../../../action';

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

  componentDidMount() {
    if (this.props.historyProgrammeList[0]) {
      const m = this.props.historyProgrammeList[0];
      const a = this.props.specificProgrammeHistory;
      this.props.getExerciseHistory({ day: m.days, programmeID: m.id, currentData: a });
      console.log('run History');
    }
  }

  render() {
    const {
      classes, progress, currentWeek, historyProgrammeList,
    } = this.props;
    console.log(historyProgrammeList);
    return (
      <MainComponent
        top
        backgroundImage="image/sampleImage.jpeg"
        title="History"
        progress={progress}
        currentWeek={currentWeek}
        currentPage={1}
        FooterContent={1}
        tapBarContent={false}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>
              <Component
                historyProgrammeList={historyProgrammeList}
              />
            </Paper>
          </Grid>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    historyProgrammeList, specificProgrammeHistory,
  } = state.Workout;
  return {
    historyProgrammeList, specificProgrammeHistory,
  };
}

HistoryIndex.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default connect(mapStateToProps, { getExerciseHistory })(withStyles(styles)(HistoryIndex));
