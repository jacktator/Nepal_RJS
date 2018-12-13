import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ExerciseComponent from './component';
import MainComponent from '../../../HOC/PageStructure';
import SpeedDialTooltipOpen from '../../../HOC/speedDial';
import { add, min } from '../../../HOC/numberSelect';
import { styles } from '../../styles';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      midPartTabsValue: 0,
      currentPage: 2,
      weight: 0,
      sets: 0,
    };
    this.weightAdd = this.weightAdd.bind(this);
    this.weightMin = this.weightMin.bind(this);
    this.setsAdd = this.setsAdd.bind(this);
    this.setsMin = this.setsMin.bind(this);
  }

  weightAdd() {
    this.setState(add('weight'));
  }

  weightMin() {
    this.setState(min('weight'));
  }

  setsAdd() {
    this.setState(add('sets'));
  }

  setsMin() {
    this.setState(min('sets'));
  }

  render() {
    const { classes, currentWeek, progress } = this.props;
    const { weight, sets } = this.state;
    const select = [
      {
        label: 'weight',
        min: this.weightMin,
        add: this.weightAdd,
        value: weight,
      }, {
        label: 'sets',
        min: this.setsMin,
        add: this.setsAdd,
        value: sets,
      },
    ];
    const ExList = [
      {
        latest: true,
        content: '10 weight X 10 sets',
        status: 'Previous',
      },
    ];

    return (
      <MainComponent
        backgroundImage="image/sampleImage.jpeg"
        title="Workout"
        progress={progress}
        currentWeek={currentWeek}
        currentPage={2}
        FooterContent={1}
        midComponent={(
          <Grid container style={{ flex: 1 }} direction="column" justify="center" alignContent="space-between" alignItems="center">

            <Grid container item direction="column" alignContent="space-between" alignItems="center">
              <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} color="secondary" aria-label="Menu" >
                    <LeftIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <Typography className={classes.grow} variant="h6" color="secondary">Title</Typography>
                  <div style={{ minHeight: '56px', minWidth: '56px' }}>
                    <SpeedDialTooltipOpen right secondary />
                  </div>
                </Toolbar>
              </AppBar>
            </Grid>

            <ExerciseComponent
              step={10}
              select={select}
              ExList={ExList}
            />

          </Grid>
        )}
      />
    );
  }
}

ExerciseIndex.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default withStyles(styles)(ExerciseIndex);
