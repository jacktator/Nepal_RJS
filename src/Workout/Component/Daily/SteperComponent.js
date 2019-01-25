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
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';
import { IMAGE_URL } from '../../../config';

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  mobileStepper: {
    width: '100%',
    padding: '0',
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
    maxHeight: '300px',
    minHeight: '100px',
  },
  chip: {
    width: '100%',
  },
});

class TextMobileStepper extends React.PureComponent {
  render() {
    const {
      classes, theme, handleBack, handleNext, dialogSelected, tutorialSteps, dialogIndexSelected,
      selectDialogIndex, id,
    } = this.props;
    const maxSteps = tutorialSteps.length > 1 ? tutorialSteps[dialogIndexSelected].length - 1 : (tutorialSteps[dialogIndexSelected] ? tutorialSteps[dialogIndexSelected].length : 1);
    const imageID = id.id;
    return (
      tutorialSteps.length >= 1 && tutorialSteps[dialogIndexSelected].length > 0
        ? (
          <div className={classes.root}>
            {tutorialSteps.length > 1 && tutorialSteps.map((v, k) => (
              <Chip
                className={classes.chip}
                key={v[v.length - 1]}
                label={<Typography color={k === dialogIndexSelected ? 'secondary' : 'default'}>{v[v.length - 1]}</Typography>}
                onClick={() => selectDialogIndex(k)}
                color={k === dialogIndexSelected ? 'primary' : 'default'}
              />
            )) }
            <Paper square elevation={0} className={classes.header}>
              <Typography>{tutorialSteps[dialogIndexSelected][dialogSelected].name}</Typography>
            </Paper>
            <CardMedia
              className={classes.img}
              image={`${IMAGE_URL}${imageID}${`${tutorialSteps[dialogIndexSelected][dialogSelected].name}`.replace(/ /g, '-')}.gif`}
            />
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={dialogSelected}
              className={classes.mobileStepper}
              nextButton={(
                <Button size="small" onClick={handleNext} disabled={dialogSelected === maxSteps - 1}>
                Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            )}
              backButton={(
                <Button size="small" onClick={handleBack} disabled={dialogSelected === 0}>
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

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
