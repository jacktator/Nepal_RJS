import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import HOCInputFile from '../../../HOC/inputFiles';
import styles from '../../styles';
import Dialog from '../../../HOC/Dialog';
import { validation } from '../../../HOC/Validation';


const Component = (props) => {
  const {
    theme, loading, email, password, rePassword, onChangeHandle, onRegisterClick, onErrorChangeHandle,
    errorDialogOpenStatus, handleErrorClose,
  } = props;
  const { logo } = theme;
  const tstyles = styles(theme);
  const emailError = validation('email', email).error;
  const passwordError = validation('password', password).error;
  const rePasswordError = password === rePassword;
  const onClickValidation = (emailError && passwordError && rePasswordError);

  return (
    <div style={tstyles.container}>
      <Dialog
        open={errorDialogOpenStatus}
        title="Something Error"
        discription="The email has been already registered"
        loadingStatus={false}
        handleClose={handleErrorClose}
      />
      <Grid style={tstyles.gridRoot} container spacing={0} justify="space-between" alignItems="stretch" direction="column">
        <Grid container style={tstyles.autoFlex}>
          <Paper style={tstyles.paper}>
            <IconButton component={Link} to="/mainmenu" color="primary" aria-label="Login">
              <LeftIcon style={{ fontSize: '40px' }} />
            </IconButton>
            <Grid container style={tstyles.gridRoot} direction="column">
              <Grid container alignItems="flex-end" style={{ width: '100%', height: '25vh' }}>
                <CardMedia style={{ width: '100%', height: '110px', backgroundSize: 'auto' }} image={logo} />
              </Grid>
              <Grid container style={tstyles.autoFlex} direction="column" justify="center" alignItems="center">
                <Grid container alignContent="center">
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    onErrorChangeHandle={onErrorChangeHandle}
                    value={email}
                    type="email"
                    fullwidth
                  />
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    onErrorChangeHandle={onErrorChangeHandle}
                    value={password}
                    type="password"
                    fullwidth
                  />
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    onErrorChangeHandle={onErrorChangeHandle}
                    confirm={password}
                    value={rePassword}
                    type="rePassword"
                    fullwidth
                  />
                </Grid>

                <Grid item>
                  <Typography align="center" color="primary" variant="body1" component="h6">By registering, you agree with our terms and conditions</Typography>
                </Grid>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid container style={{ height: '10vh' }} justify="center" alignItems="center">
          {loading ? <CircularProgress size={30} /> : <Button onClick={onClickValidation ? onRegisterClick : (event) => { event.preventDefault(); }} disabled={!onClickValidation} fullWidth style={tstyles.button} color="primary">Register</Button>}
        </Grid>

      </Grid>
    </div>
  );
};

Component.propTypes = {
  theme: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rePassword: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};

export default withTheme()(Component);
