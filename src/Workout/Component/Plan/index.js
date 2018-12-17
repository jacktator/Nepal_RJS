import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Component from './component';
import MainComponent from '../../../HOC/PageStructure';
import { styles } from '../../styles';
import { getCurrentProgram, finishQuery } from '../../action';
import LoadingComponent from '../../../HOC/Loading';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

class index extends React.Component {
  constructor(props) {
    super(props);
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
  }

  componentDidMount() {
    this.props.finishQuery(true);
    this.props.getCurrentProgram();
  }

  componentDidUpdate() {
    if (this.props.directToQuestionnaire) {
      window.location.href = '#/mainmenu';
    }
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  render() {
    const {
      classes, programQuery,
    } = this.props;
    const { progress, days, path } = sessionStorage;
    const currentWeek = ~~(progress / days);
    return (
      <div>
        <LoadingComponent open={programQuery} />
        <MainComponent
          top
          backgroundImage="image/sampleImage.jpeg"
          title={path || 'Workout'}
          progress={progress || 1}
          currentWeek={currentWeek || 0}
          currentPage={2}
          FooterContent={1}
          tapBarContent={tapBarContent}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
              <Paper className={classes.midPaper} elevation={8}>
                <Component
                  days={days * 1}
                  currentWeek={currentWeek}
                  progress={progress}
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
  const { programQuery, directToQuestionnaire } = state.Workout;
  return {
    programQuery, directToQuestionnaire,
  };
}

index.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default connect(mapStateToProps, { getCurrentProgram, finishQuery })(withStyles(styles)(index));
