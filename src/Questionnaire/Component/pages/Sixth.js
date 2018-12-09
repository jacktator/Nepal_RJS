import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormControlLabel, Typography,
  Checkbox, FormHelperText, FormGroup, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';
import { sixth } from '../contentData';

class Sixth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pain: '',
      health: '',
    };
    this.handlePainChange = this.handlePainChange.bind(this);
    this.handleHealthChange = this.handleHealthChange.bind(this);
  }

  handlePainChange(event) {
    this.setState({ pain: event.target.value });
  }

  handleHealthChange(event) {
    this.setState({ health: event.target.value });
  }

  render() {
    const { classes, handleClickOpen } = this.props;
    const { pain, health } = this.state;
    const error = pain === '';
    return (
      <Grid container direction="column" justify="space-around" alignItems="center" style={{ height: '100%' }}>
        <Grid style={{ height: '17%' }} container alignItems="center" justify="center">
          <Typography variant="h5" component="h5" color="textPrimary">Health and Wellbeing</Typography>
        </Grid>
        <Grid container spacing={40} className={classes.topGrid} style={{ width: '100%', margin: '0' }} justify="center" alignContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
              <Typography variant="body1" component="h6" color="textPrimary"> Do you experience injury or posture related pain at work?</Typography>
              <FormGroup>
                {sixth.pain.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    key={v.id}
                    control={
                      <Checkbox  color="primary" checked={pain === `${v.id}`} onChange={this.handlePainChange} value={`${v.id}`} />
              }
                    label={v.title}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
              <Typography variant="body1" component="h6" color="textPrimary"> How do you feel your health and wellbeing is right now?</Typography>
              <FormGroup>
                {sixth.health.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={v.id}
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    control={
                      <Checkbox  color="primary" checked={health === `${v.id}`} onChange={this.handleHealthChange} value={`${v.id}`} />
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
Sixth.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
};
export default withStyles(styles)(Sixth);
