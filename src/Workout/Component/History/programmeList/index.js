import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import MainComponent from '../../../../HOC/PageStructure';
import Component from './component';
import { styles } from '../../../styles';
import { getExerciseHistory, finishHistoryQuery } from '../../../action';

class HistoryIndex extends React.PureComponent {
  // componentDidMount() {
  //   if (this.props.historyProgrammeList[0]) {
  //     this.props.finishHistoryQuery(true);
  //     const m = this.props.historyProgrammeList[0];
  //     const a = this.props.specificProgrammeHistory;
  //     this.props.getExerciseHistory({ day: m.days, programmeID: m.id, currentData: a });
  //     console.log('run History');
  //   }
  // }

  render() {
    const {
      classes, progress, historyProgrammeList,
    } = this.props;
    return (
      <MainComponent
        top
        backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
        title="History"
        progress={progress}
        currentPage={1}
        FooterContent={1}
        tapBarContent={false}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="flex-start">
            <Component
              historyProgrammeList={historyProgrammeList}
            />
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
  progress: PropTypes.string,
};

export default connect(mapStateToProps, { getExerciseHistory, finishHistoryQuery })(withStyles(styles)(HistoryIndex));
