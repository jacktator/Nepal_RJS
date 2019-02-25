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
import Dialog from '../../../HOC/Dialog';
import HOCInputFile from '../../../HOC/inputFiles';
import styles from '../../styles';


const Component = (props) => {
  const {
    theme, loading, onChangeHandle, email, onRetrieveClick, emailError, showDialog, handleCloseDialog, dialogDiscription,
  } = props;
  const { logo } = theme;
  const tstyles = styles(theme);
  return (
    <div style={tstyles.container}>
      <Dialog
        loadingStatus={false}
        open={showDialog}
        handleClose={handleCloseDialog}
        title=""
        discription={dialogDiscription}
      />
      <Grid container style={tstyles.gridRoot} spacing={0} justify="space-between" alignItems="stretch" direction="column">

        <Grid container style={tstyles.autoFlex}>
          <Paper style={tstyles.paper}>
            <IconButton style={tstyles.menuButton} component={Link} to="/mainmenu" color="primary" aria-label="Login">
              <LeftIcon style={{ fontSize: '40px' }} />
            </IconButton>
            <Grid container style={tstyles.gridRoot} direction="column">

              <Grid container alignItems="flex-end" style={{ width: '100%', height: '25vh' }}>
                <CardMedia style={{ width: '100%', height: '110px', backgroundSize: 'auto' }} image={logo} />
              </Grid>

              <Grid container style={tstyles.autoFlex} direction="column" justify="space-evenly">
                <Grid container alignContent="center">
                  <HOCInputFile
                    onChangeHandle={onChangeHandle}
                    value={email}
                    error={emailError.error}
                    resDiscription={emailError.resDiscription}
                    type="email"
                    fullwidth
                  />
                </Grid>
                <Grid item>
                  <Typography style={{ width: '80%', marginLeft: '10%' }} align="center" variant="body1" component="h6" color="primary">Please enter your email for resetting password</Typography>
                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>

        <Grid container style={{ height: '10vh' }} justify="center" alignItems="center">
          {loading ? <CircularProgress size={30} /> : <Button style={tstyles.button} onClick={onRetrieveClick} color="primary">Retrieve</Button>}
        </Grid>

      </Grid>
    </div>
  );
};

Component.propTypes = {
  theme: PropTypes.object.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withTheme()(Component);
