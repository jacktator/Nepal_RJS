import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles';
import { seventh } from '../contentData';

class Seventh extends React.PureComponent {
  constructor(props) {
    super(props);
    this.seventhWeekHandleChange = this.seventhWeekHandleChange.bind(this);
  }

  seventhWeekHandleChange(event) {
    this.props.handleChangeState('seventh', event.target.name, event.target.value);
  }


  render() {
    const { classes, handleClickOpen, data } = this.props;
    const { active, exercise } = data;
    const error = active === '';
    return (
      <Grid container style={{ height: '100%' }} direction="column" justify="space-around" alignItems="center">

        <Grid container style={{ height: '17%' }} justify="center" alignItems="center">
          <Typography variant="h6" component="h6" color="textPrimary">General Activity and Exercise Level</Typography>
        </Grid>

        <Grid container className={classes.topGrid} style={{ width: '100%', margin: '0' }} spacing={40} justify="center" alignContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} style={{ paddingTop: '0', paddingBottom: '0' }}>
            <FormControl required className={classes.formControl} error={error} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">How active are you on a daily basis?</Typography>
              <FormGroup>
                {seventh.active.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    key={v.id}
                    name="active"
                    control={
                      <Checkbox color="primary" checked={active === `${v.id}`} onChange={this.seventhWeekHandleChange} value={`${v.id}`} />
                    }
                    label={v.title}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required className={classes.formControl} error={error} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">How many days per week do you currently exercise?</Typography>
              <FormGroup>
                {seventh.exercise.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={v.id}
                    name="exercise"
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    control={
                      <Checkbox color="primary" checked={exercise === `${v.id}`} onChange={this.seventhWeekHandleChange} value={`${v.id}`} />
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

Seventh.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  data:PropTypes.object.isRequired,
};

export default withStyles(styles)(Seventh);
