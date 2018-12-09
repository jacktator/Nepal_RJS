import React from 'react';
import PropTypes from 'prop-types';
import {
  Radio, FormControl, FormControlLabel, RadioGroup, Typography, TextField, InputAdornment, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SwipeableTemporaryDrawer from '../../../HOC/swipableSelect';
import styles from '../../styles';

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'female',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Grid container direction="column" justify="space-around" alignItems="center" style={{ height: '100%' }}>
        <Grid style={{ height: '20%' }} container alignItems="center" justify="center">
          <Typography variant="h5" component="h5" color="textPrimary">Your Details</Typography>
        </Grid>
        <Grid container spacing={40} className={classes.topGrid} style={{ width: '100%', margin: '0' }} justify="center" alignContent="flex-start" alignItems="center">
          <Grid item xs={12}>
            <TextField
              id="email"
              placeholder="Example@gmail.com"
              fullWidth
              InputProps={{
                classes: { underline: classes.inputFile },
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography variant="body1" component="h6" color="textPrimary">Email: </Typography>
                  </InputAdornment>),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <Typography variant="body1" component="h6" color="textPrimary">Gender: </Typography>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={value}
                onChange={this.handleChange}
                row
              >
                <FormControlLabel value="female" control={<Radio  color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio  color="primary" />} label="Male" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <SwipeableTemporaryDrawer
              id="age"
              label="Age"
              content={
                [...Array(72).keys()].map(v => v + 12)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <SwipeableTemporaryDrawer
              id="weight"
              label="Weight"
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
};
export default withStyles(styles)(First);
