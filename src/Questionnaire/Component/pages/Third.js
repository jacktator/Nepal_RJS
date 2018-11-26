import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormControlLabel, Typography,
  Checkbox, FormHelperText, FormGroup, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';
import { third } from '../contentData';

class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rehab: '',
    };
    this.handleRehabChange = this.handleRehabChange.bind(this);
  }

  handleRehabChange(event) {
    this.setState({ rehab: event.target.value });
  }


  render() {
    const { classes, handleClickOpen } = this.props;
    const { rehab } = this.state;
    const error = rehab === '';
    return (
      <Grid container direction="column" justify="space-around" alignItems="center" style={{ height: '100%' }}>
        <Grid style={{ height: '20%' }} container alignItems="center" justify="center">
          <Typography variant="h5" component="h5" color="textPrimary">Injury Management</Typography>
        </Grid>
        <Grid container spacing={40} className={classes.topGrid} style={{ width: '100%', margin: '0' }} justify="center" alignContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
              <Typography variant="body1" component="h6" color="textPrimary">What is your current rehab focus: </Typography>
              <FormGroup>
                {third.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={v.id}
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    control={
                      <Checkbox disableTouchRipple color="primary" checked={rehab === `${v.id}`} onChange={this.handleRehabChange} value={`${v.id}`} />
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
Third.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
};
export default withStyles(styles)(Third);
