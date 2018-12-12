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
import { fifth } from '../contentData';

class Fifth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.firstWeekHandleChange = this.firstWeekHandleChange.bind(this);
  }

  firstWeekHandleChange(event) {
    this.props.handleChangeState('fifth', event.target.name, event.target.value);
  }

  render() {
    const { classes, handleClickOpen, data } = this.props;
    const { stress, productivity } = data;
    const error = stress === '';
    return (
      <Grid container style={{ height: '100%' }} direction="column" justify="space-around" alignItems="center">

        <Grid container style={{ height: '17%' }} justify="center" alignItems="center">
          <Typography variant="h5" component="h5" color="textPrimary">Stress and Productivity</Typography>
        </Grid>

        <Grid container className={classes.topGrid} style={{ width: '100%', margin: '0' }} spacing={40} justify="center" alignContent="flex-start" alignItems="flex-start">
          
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required className={classes.formControl} error={error} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">How often do you feel stressed at work: </Typography>
              <FormGroup>
                {fifth.stress.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    key={v.id}
                    name="stress"
                    control={
                      <Checkbox color="primary" checked={stress === `${v.id}`} onChange={this.firstWeekHandleChange} value={`${v.id}`} />
                    }
                    label={v.title}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required className={classes.formControl} error={error} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">In last 4 weeks, I have felt productive:</Typography>
              <FormGroup>
                {fifth.productivity.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={v.id}
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    name="productivity"
                    control={
                      <Checkbox color="primary" checked={productivity === `${v.id}`} onChange={this.firstWeekHandleChange} value={`${v.id}`} />
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
