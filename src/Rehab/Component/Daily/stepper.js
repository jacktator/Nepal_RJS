/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  chip: {
    width: '100%',
  },
});

class SelectRehabDialog extends React.PureComponent {
  render() {
    const {
      classes, theme, handleBack, handleNext, selected, data,
    } = this.props;
    const maxSteps = data.length - 1;
    return (
      data.length > 0
        ? (
          <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
              <Typography>{data[selected].name}</Typography>
            </Paper>
            <img
              className={classes.img}
              src="/image/workoutExercise.jpg"
              alt={data[selected].name}
            />
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={selected}
              className={classes.mobileStepper}
              nextButton={(
                <Button size="small" onClick={handleNext} disabled={selected === maxSteps - 1}>
                Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            )}
              backButton={(
                <Button size="small" onClick={handleBack} disabled={selected === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
                </Button>
            )}
            />
          </div>
        )
        : (
          <div style={{
            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <CircularProgress color="primary" />
          </div>
        )
    );
  }
}

SelectRehabDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SelectRehabDialog);
