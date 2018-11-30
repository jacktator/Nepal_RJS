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

import Component from './component';

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
    const { classes } = this.props;
    return (
      <MainComponent
        backgroundImage="image/sampleImage.jpeg"
        title="Workout"
        progress={this.props.progress}
        currentWeek={this.props.currentWeek}
        currentPage={2}
        FooterContent={1}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-between" alignItems="center" direction="column">
            <Grid container item direction="column" alignContent="space-between" alignItems="center">
              <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} color="secondary" aria-label="Menu" disableTouchRipple>
                    <LeftIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <Typography variant="h6" color="secondary" className={classes.grow}>Title</Typography>
                  <div style={{ minHeight: '56px', minWidth: '56px' }}>
                    <SpeedDialTooltipOpen right secondary />
                  </div>
                </Toolbar>
              </AppBar>
            </Grid>
            <Component step={10} />
          </Grid>
          )}
      />
    );
  }
}

export default withStyles(styles)(HistoryIndex);
