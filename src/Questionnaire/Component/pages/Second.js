import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import SwipeableTemporaryDrawer from '../../../HOC/swipableSelect';
import styles from '../../styles';
import { second } from '../contentData';

class Second extends React.PureComponent {
  constructor(props) {
    super(props);
    this.secondWeekHandleChange = this.secondWeekHandleChange.bind(this);
  }

  secondWeekHandleChange(event) {
    this.props.handleChangeState('second', event.target.name, event.target.value);
  }

  render() {
    const { classes, handleClickOpen, data } = this.props;
    const { days, location, goal } = data;
    const error = goal === '';
    return (
      <Grid container style={{ height: '100%' }} direction="column" justify="space-around" alignItems="center">

        <Grid container style={{ height: '20%' }} justify="center" alignItems="center">
          <Typography variant="h5" component="h5" color="textPrimary">Create Your Program</Typography>
        </Grid>

        <Grid container className={classes.topGrid} style={{ width: '100%', margin: '0' }} spacing={40} justify="center" alignContent="flex-start" alignItems="center">
          
          <Grid item xs={12}>
            <Typography variant="body1" component="h6" color="textPrimary">
              How many days per week would you like to exercise:
            </Typography>
            <SwipeableTemporaryDrawer
              id="days"
              value={days}
              onChange={this.secondWeekHandleChange}
              content={
                [...Array(3).keys()].map(v => v + 3)
              }
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">
                Where would you like to exercise: 
              </Typography>
              <RadioGroup
                aria-label="Location"
                name="location"
                className={classes.group}
                value={location}
                onChange={this.secondWeekHandleChange}
                row
              >
                <FormControlLabel labelPlacement="start" style={{ marginRight: '0' }} value="gym" control={<Radio color="primary" />} label="Gym" />
                <FormControlLabel labelPlacement="start" style={{ marginRight: '0' }} value="home" control={<Radio color="primary" />} label="Home" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required className={classes.formControl} error={error} component="fieldset">
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
                    name="goal"
                    control={
                      <Checkbox color="primary" checked={goal === `${v.id}`} name="goal" onChange={this.secondWeekHandleChange} value={`${v.id}`} />
                    }
                    label={v.title}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

Second.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  data:PropTypes.object.isRequired,
};

export default withStyles(styles)(Second);
