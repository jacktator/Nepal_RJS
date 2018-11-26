import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, MobileStepper, Grid, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import renderComponent from './Component';
import styles from './styles';
import Dialog from '../HOC/Dialog';


class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      open: false,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleNext() {
    const { activeStep } = this.state;
    if (activeStep < 6) {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
    }
  }

  handleBack() {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  }

  handleClickOpen(content) {
    const { discription, title } = content;
    this.setState({ open: true, discription, title });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes, theme } = this.props;
    const {
      activeStep, open, discription, title,
    } = this.state;
    const maxSteps = 7;
    return (
      <div className={classes.container}>
        <Grid container className={classes.rootGrid} direction="column" justify="space-between">
          <Grid container className={classes.topGrid} justify="center" alignItems="center">
            <Paper elevation={12} className={classes.paper}>
              {renderComponent({
                activeStep, handleClickOpen: this.handleClickOpen,
              })}
            </Paper>
            <Dialog
              open={open}
              discription={discription}
              title={title}
              handleClose={this.handleClose}
            />
          </Grid>
          <Grid container className={classes.bottomGrid}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={(
                <Button disableTouchRipple color="primary" size="small" onClick={this.handleNext}>
                  {activeStep === maxSteps - 1 ? 'Finish' : 'Next'}
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>)}
              backButton={(
                <Button disableTouchRipple color="primary" size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                </Button>)}
            />
          </Grid>

        </Grid>
      </div>

    );
  }
}
index.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(index);
