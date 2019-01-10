import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import LoadingComponent from '../../../../HOC/Loading';
import MainComponent from '../../../../HOC/PageStructure';
import { styles } from '../../../styles';
import Component from './component';
import { finishHistoryQuery, getExerciseHistory } from '../../../action';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 0,
      renderData: {},
      renderProgrammeIndex: -1,
    };
    this.onTabsClick = this.onTabsClick.bind(this);
  }

  componentDidMount() {
    const urlProgrammeID = this.props.match.params.programmeID;
    const a = this.props.historyProgrammeList && [...this.props.historyProgrammeList].findIndex(v => v.id === urlProgrammeID * 1);
    console.log([...this.props.historyProgrammeList].find((v, k) => { console.log('id', v.id); console.log('ID', urlProgrammeID); return (v.id === urlProgrammeID * 1); }));
    // this.props.finishHistoryQuery(true);
    if (a === -1) {
      window.location.href = '#/workout/history';
      return;
    }
    this.setState({ renderData: this.props.historyProgrammeList[a], renderProgrammeIndex: a });
  }

  onTabsClick(event, value) {
    console.log(value);
    this.setState({ tabs: value });
  }

  render() {
    const { classes, historyQuery } = this.props;
    const { tabs, renderData, renderProgrammeIndex } = this.state;
    return (
      <div>
        <LoadingComponent open={historyQuery} />

        <MainComponent
          top
          backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
          title={renderData ? renderData.program_name : 'history'}
          currentWeek={5}
          tabsValue={tabs}
          currentPage={1}
          FooterContent={1}
          onTagClick={this.onTabsClick}
          tapBarContent={tapBarContent}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
              <Paper className={classes.midPaper} elevation={8}>
                <Component
                  starDayNumber={tabs * renderData.days}
                  days={renderData ? renderData.days : 4}
                  week={tabs}
                  programmeID={this.props.match.params.programmeID}
                  renderProgrammeIndex={renderProgrammeIndex}
                />
              </Paper>
            </Grid>
            )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { historyProgrammeList, historyQuery, specificProgrammeHistory } = state.Workout;
  return {
    historyProgrammeList, historyQuery, specificProgrammeHistory,
  };
}

export default connect(mapStateToProps, { finishHistoryQuery, getExerciseHistory })(withStyles(styles)(Calendar));
