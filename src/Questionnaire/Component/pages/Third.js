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
import { third } from '../contentData';

class Third extends React.PureComponent {
  constructor(props) {
    super(props);
    this.thirdWeekHandleChange = this.thirdWeekHandleChange.bind(this);
  }


  thirdWeekHandleChange(event) {
    this.props.handleChangeState('third', event.target.name, event.target.value);
  }

  render() {
    const { classes, handleClickOpen, data } = this.props;
    const { rehab } = data;
    const error = rehab === '';
    return (
      <Grid container style={{ height: '100%' }} direction="column" justify="space-around" alignItems="center">

        <Grid container style={{ height: '20%' }} justify="center" alignItems="center">
          <Typography variant="h5" component="h5" color="textPrimary">Injury Management</Typography>
        </Grid>

        <Grid container className={classes.topGrid} style={{ width: '100%', margin: '0' }} spacing={40} justify="center" alignContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} style={{ paddingTop: '0' }}>
            <FormControl required className={classes.formControl} error={error} component="fieldset">
              <Typography variant="body1" component="h6" color="textPrimary">What is your current rehab focus: </Typography>
              <FormGroup>
                {third.map(v => (
                  <FormControlLabel
                    style={{ justifyContent: 'space-between' }}
                    labelPlacement="start"
                    key={v.id}
                    name="rehab"
                    onClick={() => handleClickOpen({ discription: v.describe, title: v.title })}
                    control={
                      <Checkbox color="primary" checked={rehab === `${v.id}`} onChange={this.thirdWeekHandleChange} value={`${v.id}`} />
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
