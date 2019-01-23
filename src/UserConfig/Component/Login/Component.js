import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import HOCInputFile from '../../../HOC/inputFiles';
import styles from '../../styles';
import Dialog from '../../../HOC/Dialog';

const Component = (props) => {
  const { theme } = props;
  const { logo } = theme;
  const tstyles = styles(theme);
  const {
    loading, email, password, onChangeHandle, onLoginClick, error, handleErrorClose,
  } = props;
  return (
    <div style={tstyles.container}>
      <Dialog
        open={error}
        title="Something Error"
        discription="Username or Password are not match"
        loadingStatus={false}
        handleClose={handleErrorClose}
      />
      <Grid container style={tstyles.gridRoot} spacing={0} justify="space-between" alignItems="stretch" direction="column">
        <Grid container style={tstyles.autoFlex}>
          <Paper style={tstyles.paper}>
            <Grid container style={tstyles.gridRoot} direction="column">

              <Grid container alignItems="flex-end" style={{ width: '100%', height: '33vh' }}>
                <CardMedia style={{ width: '100%', height: '110px', backgroundSize: 'auto' }} image={logo} />
              </Grid>

              <Grid container style={tstyles.autoFlex} direction="column" justify="center">
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
                  <Button variant="text" color="primary" component={Link} to="/user/Retrieve" fullWidth>Forget Password</Button>
                  <Button variant="text" color="primary" component={Link} to="/user/Register" fullWidth>Register</Button>
                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>

        <Grid container style={{ height: '10vh' }} justify="center" alignItems="center">
          {loading ? <CircularProgress size={30} /> : <Button style={tstyles.button} fullWidth color="primary" onClick={onLoginClick}>Login</Button>}
        </Grid>

      </Grid>
    </div>
  );
};

Component.propTypes = {
  theme: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
};

export default withTheme()(Component);
