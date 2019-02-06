/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SwipeableTemporaryDrawer from './swipableSelect';
import HOCDialog from './Dialog';
import { second, third, fourth } from '../Questionnaire/Component/contentData';


const Transition = props => <Slide direction="up" {...props} />;

const Rehab = (props) => {
  const {
    rehab, posture, handleClickOpen, error, handleChange,
  } = props;
  return (
    <Grid container style={{ marginTop: '0', padding: '12px' }} spacing={40} justify="center" alignContent="flex-start" alignItems="flex-start">
      <Grid item xs={12} style={{ paddingTop: '0' }}>
        <FormControl required error={error} component="fieldset">
          <Typography variant="body1" component="h6" color="textPrimary">What is your current rehab focus: </Typography>
          <FormGroup>
            {third.map(v => (
              <FormControlLabel
                style={{ justifyContent: 'space-between' }}
                labelPlacement="start"
                key={v.id}
                name="injury"
                onClick={() => handleClickOpen({ discription: v.describe || '', title: v.title })}
                control={
                  <Checkbox color="primary" checked={rehab === `${v.id}`} onChange={handleChange} value={`${v.id}`} />
                    }
                label={v.title}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: '0' }}>
        <FormControl required error={error} component="fieldset">
          <Typography variant="body1" component="h6" color="textPrimary">What is your current rehab focus: </Typography>
          <FormGroup>
            {fourth.map(v => (
              <FormControlLabel
                style={{ justifyContent: 'space-between' }}
                labelPlacement="start"
                key={v.id}
                name="posture"
                onClick={() => handleClickOpen({ discription: v.describe || '', title: v.title })}
                control={
                  <Checkbox color="primary" checked={posture === `${v.id}`} onChange={handleChange} value={`${v.id}`} />
                    }
                label={v.title}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

const Workout = (props) => {
  const {
    location, days, goal, handleChange, error, handleClickOpen,
  } = props;
  return (
    <Grid container style={{ marginTop: '0', padding: '12px' }} spacing={40} justify="center" alignContent="flex-start" alignItems="center">

      <Grid item xs={12}>
        <Typography variant="body1" component="h6" color="textPrimary">
              How many days per week would you like to exercise:
        </Typography>
        <SwipeableTemporaryDrawer
          id="queDays"
          value={days}
          onChange={handleChange}
          content={
                [...Array(3).keys()].map(v => v + 3)
              }
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl component="fieldset">
          <Typography variant="body1" component="h6" color="textPrimary">
                Where would you like to exercise:
          </Typography>
          <RadioGroup
            aria-label="Location"
            name="queLocation"
            value={location}
            onChange={handleChange}
            row
          >
            <FormControlLabel labelPlacement="start" style={{ marginRight: '0' }} value="gym" control={<Radio color="primary" />} label="Gym" />
            <FormControlLabel labelPlacement="start" style={{ marginRight: '0' }} value="home" control={<Radio color="primary" />} label="Home" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} style={{ paddingTop: '0' }}>
        <FormControl required error={error} component="fieldset">
          <Typography variant="body1" component="h6" color="textPrimary">
                What is your current training goal:
          </Typography>
          <FormGroup>
            {second[location].map(v => (
              <FormControlLabel
                style={{ justifyContent: 'space-between' }}
                labelPlacement="start"
                onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                key={v.id}
                name="queGoal"
                control={
                  <Checkbox color="primary" checked={goal === `${v.id}`} name="queGoal" onChange={handleChange} value={`${v.id}`} />
                    }
                label={v.title}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};


class RestartDialog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDiscription: false,
      discription: '',
      directionTitle: '',
    };
    this.handleDiscriptionOpen = this.handleDiscriptionOpen.bind(this);
    this.handleDiscriptionClose = this.handleDiscriptionClose.bind(this);
  }

  handleDiscriptionOpen(v) {
    this.setState({ showDiscription: true, discription: v.discription, directionTitle: v.title });
  }

  handleDiscriptionClose() {
    this.setState({ showDiscription: false });
  }

  render() {
    const {
      open, handleClose, title, workoutS, rehabS, rehab, posture,
      location, days, goal, handleChange, error, handleRestartSave,
    } = this.props;
    const { discription, directionTitle, showDiscription } = this.state;
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={this.handleDiscriptionClose}
        TransitionComponent={Transition}
      >
        <AppBar position="relative" style={{ backgroundColor: 'white' }}>
          <Toolbar>
            <IconButton color="primary" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="primary" style={{ flexGrow: 1 }}>
              {`Start ${title}`}
            </Typography>
            <Button color="primary" onClick={handleRestartSave}>
                Submit
            </Button>
          </Toolbar>
        </AppBar>
        <HOCDialog
          loadingStatus={false}
          open={showDiscription}
          discription={discription}
          title={directionTitle}
          handleClose={this.handleDiscriptionClose}
        />
        {workoutS && (
        <Workout
          location={location}
          days={days}
          goal={goal}
          handleChange={handleChange}
          error={error}
          handleClickOpen={this.handleDiscriptionOpen}
        />
        )}
        {rehabS && (
        <Rehab
          rehab={rehab}
          posture={posture}
          handleChange={handleChange}
          error={error}
          handleClickOpen={this.handleDiscriptionOpen}
        />
        )}
      </Dialog>
    );
  }
}

export default RestartDialog;
