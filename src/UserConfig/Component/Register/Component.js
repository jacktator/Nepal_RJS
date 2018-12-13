import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HOCInputFile from '../../../HOC/inputFiles';
import styles from '../../styles';

const Component = (props) => {
  const {
    classes, loading, email, password, rePassword, onChangeHandle, onRegisterClick,
  } = props;
  return (
    <div className={classes.container}>
      <Grid className={classes.gridRoot} container spacing={0} justify="space-between" alignItems="stretch" direction="column">
        <Grid container className={classes.autoFlex}>
          <Paper className={classes.paper}>
            <Grid container className={classes.gridRoot} direction="column">
              
              <Grid container style={{ height: '33vh' }} justify="center" alignItems="flex-end">
                <Typography variant="h2" component="h3" align="center" color="secondary" gutterBottom>Nepal</Typography>
              </Grid>

              <Grid container className={classes.autoFlex} direction="column" justify="center" alignItems="center">
                <Grid container alignContent="center">
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    value={email}
                    type="email"
                    fullwidth
                  />
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    value={password}
                    type="password"
                    fullwidth
                  />
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    confirm={password}
                    value={rePassword}
                    type="rePassword"
                    fullwidth
                  />
                </Grid>

                <Grid item>
                  <Typography align="center" color="secondary" variant="body1" component="h6">By registering, you agree with our terms and conditions</Typography>
                </Grid>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid container style={{ height: '10vh' }} justify="center" alignItems="center">
          {loading ? <CircularProgress size={30} /> : <Button onClick={onRegisterClick} fullWidth className={classes.button} color="primary">Register</Button>}
        </Grid>

      </Grid>
    </div>
  );
};

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rePassword: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Component);
