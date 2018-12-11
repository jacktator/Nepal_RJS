import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import renderComponent from './Component';
import styles from './styles';
import Dialog from '../HOC/Dialog';
import { initialData } from './Component/contentData';


class index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      open: false,
      title: '',
      discription: '',
      ...initialData,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.validation = this.validation.bind(this);
    this.validationHandle = this.validationHandle.bind(this);
  }

  handleNext() {
    const { activeStep } = this.state;
    if (activeStep < 6) {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
      return;
    }
    this.validationHandle();
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

  handleChangeState(week, name, value) {
    this.setState(preState => ({ [week]: { ...preState[week], [name]: value } }));
  }

  validation() {
    const {
      first, second, third, fourth, fifth, sixth, seventh,
    } = this.state;
    const fristV = !!first.name && !!first.age && !!first.gender && !!first.weight;
    const secondV = !!second.days && !!second.location && !!second.goal;
    const thirdV = !!third.rehab;
    const fourthV = !!fourth.posture;
    const fifthV = !!fifth.stress && !!fifth.productivity;
    const sixthV = !!sixth.injury && !!sixth.health;
    const seventhV = !!seventh.active && !!seventh.exercise;
    return (fristV && secondV && thirdV && fourthV && fifthV && sixthV && seventhV);
  }


  validationHandle() {
    if (this.validation()) {
      return;
    }
    this.setState({ open: true, title: 'error', discription: 'You need to finish each question' });
  }

  render() {
    const { classes, theme } = this.props;
    const {
      activeStep, open, discription, title, ...data
    } = this.state;
    const maxSteps = 7;
    const finValidation = (activeStep === maxSteps - 1) && this.validation();
    return (
      <div className={classes.container}>
        <Grid container className={classes.rootGrid} direction="column" justify="space-between">
          <Grid container className={classes.topGrid} justify="center" alignItems="center">
            <Paper elevation={12} className={classes.paper}>
              {renderComponent({
                activeStep, handleClickOpen: this.handleClickOpen, data, handleChangeState: this.handleChangeState,
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
                <Button color="primary" size="small" onClick={this.handleNext} component={finValidation ? Link : 'button'} to={finValidation ? '/mainmenu' : undefined}>
                  {activeStep === maxSteps - 1 ? 'Finish' : 'Next'}
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>)}
              backButton={(
                <Button color="primary" size="small" onClick={this.handleBack} disabled={activeStep === 0}>
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
