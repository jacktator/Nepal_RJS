import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../../styles';
import HOCInputFile from '../../../HOC/inputFiles';

const Component = (props) => {
  const {
    classes, loading, email, password, onChangeHandle, onLoginClick,
  } = props;
  return (
    <div className={classes.container}>
      <Grid className={classes.gridRoot} container spacing={0} justify="space-between" alignItems="stretch" direction="column">
        <Grid container className={classes.autoFlex}>
          <Paper className={classes.paper}>
            <Grid container className={classes.gridRoot} direction="column">
              <Grid container justify="center" alignItems="flex-end" style={{ height: '33vh' }}>
                <Typography variant="h2" component="h3" align="center" color="secondary" gutterBottom>Nepal</Typography>
              </Grid>
              <Grid container direction="column" justify="center" className={classes.autoFlex}>
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
                </Grid>
                <Grid item>
                  <Button variant="text" color="secondary" component={Link} to="/user/Retrieve" fullWidth>Forget Password</Button>
                  <Button variant="text" color="secondary" component={Link} to="/user/Register" fullWidth>Register</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container style={{ height: '10vh' }} justify="center" alignItems="center">
          {loading ? <CircularProgress size={30} /> : <Button className={classes.button} fullWidth color="primary" onClick={onLoginClick}>Login</Button>}
        </Grid>
      </Grid>
    </div>
  );
};


Component.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,

};
export default withStyles(styles)(Component);
