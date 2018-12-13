import React from 'react';
import {
  Grid, Paper, AppBar, Toolbar, Typography, Button, IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from '../../styles';
import MainComponent from '../../../HOC/PageStructure';
import SpeedDialTooltipOpen from '../../../HOC/speedDial';
import { add, min } from '../../../HOC/numberSelect';

import ExerciseComponent from './component';


const exList = [
  {
    content: '10 weight X 10 sets',
    status: 'Previous',
  },
];

class HistoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      midPartTabsValue: 0,
      currentPage: 2,
      weight: 0,
      sets: 0,
      ExList: [{
        content: '10 weight X 10 sets',
        status: 'Previous',
      }],
    };
    this.weightAdd = this.weightAdd.bind(this);
    this.weightMin = this.weightMin.bind(this);
    this.setsAdd = this.setsAdd.bind(this);
    this.setsMin = this.setsMin.bind(this);
    this.saveData = this.saveData.bind(this);
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

  saveData() {
    exList.push({
      content: `${this.state.weight} weight X ${this.state.sets} sets`,
      status: 'Previous',
    });
    const newExList = [].concat(JSON.parse(JSON.stringify(exList)));
    this.setState({ ExList: newExList });
  }

  render() {
    const { classes } = this.props;
    const { weight, sets, ExList } = this.state;
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


    return (
      <MainComponent
        backgroundImage="image/sampleImage.jpeg"
        title="Workout"
        progress={this.props.progress}
        currentWeek={this.props.currentWeek}
        currentPage={3}
        FooterContent={1}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-between" alignItems="center" direction="column">
            <Grid container item direction="column" alignContent="space-between" alignItems="center">
              <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} color="secondary" aria-label="Menu">
                    <LeftIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <Typography variant="h6" color="secondary" className={classes.grow}>Title</Typography>
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
              onSaveClick={this.saveData}
            />
          </Grid>
          )}
      />
    );
  }
}

export default withStyles(styles)(HistoryIndex);
