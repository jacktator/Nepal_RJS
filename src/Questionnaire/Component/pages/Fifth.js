import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormControlLabel, Typography,
  Checkbox, FormHelperText, FormGroup, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';
import { fifth } from '../contentData';

class Fifth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stressed: '',
      productive: '',
    };
    this.handleStressedChange = this.handleStressedChange.bind(this);
    this.handleProductiveChange = this.handleProductiveChange.bind(this);
  }

  handleStressedChange(event) {
    this.setState({ stressed: event.target.value });
  }

  handleProductiveChange(event) {
    this.setState({ productive: event.target.value });
  }

  render() {
    const { classes, handleClickOpen } = this.props;
    const { stressed, productive } = this.state;
    const error = stressed === '';
    return (
      <Grid container direction="column" justify="space-around" alignItems="center" style={{ height: '100%' }}>
        <Grid style={{ height: '17%' }} container alignItems="center" justify="center">
          <Typography variant="h5" component="h5" color="textPrimary">Stress and Productivity</Typography>
        </Grid>
        <Grid container spacing={40} className={classes.topGrid} style={{ width: '100%', margin: '0' }} justify="center" alignContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
              <Typography variant="body1" component="h6" color="textPrimary">How often do you feel stressed at work: </Typography>
              <FormGroup>
                {fifth.stressed.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    key={v.id}
                    control={
                      <Checkbox disableTouchRipple color="primary" checked={stressed === `${v.id}`} onChange={this.handleStressedChange} value={`${v.id}`} />
              }
                    label={v.title}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
              <Typography variant="body1" component="h6" color="textPrimary">In last 4 weeks, I have felt productive:</Typography>
              <FormGroup>
                {fifth.productive.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={v.id}
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}

                    control={
                      <Checkbox disableTouchRipple color="primary" checked={productive === `${v.id}`} onChange={this.handleProductiveChange} value={`${v.id}`} />
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
Fifth.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
};
export default withStyles(styles)(Fifth);
