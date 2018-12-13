import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SwipeableTemporaryDrawer from '../../../HOC/swipableSelect';
import styles from '../../styles';

class First extends React.Component {
  constructor(props) {
    super(props);
    this.firstWeekHandleChange = this.firstWeekHandleChange.bind(this);
  }

  firstWeekHandleChange(event) {
    this.props.handleChangeState('first', event.target.name, event.target.value);
  }

  render() {
    const { classes, data } = this.props;
    const {
      name, age, gender, weight,
    } = data;
    return (
      <Grid container style={{ height: '100%' }} direction="column" justify="space-around" alignItems="center">

        <Grid container style={{ height: '20%' }} justify="center" alignItems="center">
          <Typography variant="h5" component="h5" color="textPrimary">Your Details</Typography>
        </Grid>

        <Grid container className={classes.topGrid} style={{ width: '100%', margin: '0' }} spacing={40} justify="center" alignContent="flex-start" alignItems="center">
          
          <Grid item xs={12}>
            <TextField
              id="name"
              placeholder="Please enter your name"
              fullWidth
              name="name"
              value={name}
              onChange={this.firstWeekHandleChange}
              InputProps={{
                classes: { underline: classes.inputFile },
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography variant="body1" component="h6" color="textPrimary">Name: </Typography>
                  </InputAdornment>),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">Gender: </Typography>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                className={classes.group}
                value={gender}
                onChange={this.firstWeekHandleChange}
                row
              >
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <SwipeableTemporaryDrawer
              id="age"
              label="Age"
              value={age}
              onChange={this.firstWeekHandleChange}
              content={
                [...Array(72).keys()].map(v => v + 12)
              }
            />
          </Grid>

          <Grid item xs={12}>
            <SwipeableTemporaryDrawer
              id="weight"
              label="Weight"
              value={weight}
              onChange={this.firstWeekHandleChange}
              unit="kg"
              content={
                [...Array(280).keys()].map(v => `${v + 20} kg`)
              }
            />
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

First.propTypes = {
  classes: PropTypes.object.isRequired,
  data:PropTypes.object.isRequired,
};

export default withStyles(styles)(First);
