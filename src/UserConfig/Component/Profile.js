import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '20%',
    width: '92%',
    height: '85%',
  },
  container: {
    backgroundColor: '#e1e2e1',
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
    overflowY: 'scroll',
  },
  avatarGridContainer: {
    position: 'relative',
  },
  avatarContainer: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: '-15vmin',
    height: 'max-content',
    width: 'max-content',
    position: 'relative',

  },
  avatarButton: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    fontSize: '10vmin',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  input: {
    display: 'none',
  },
  avatar: {
    fontSize: '30vmin',
  },
  gridRoot: {
    height: '100%',
  },
  autoFlex: {
    flex: '1',
  },
  button: {
    fontSize: theme.typography.fontSize * 1.4,
  },
  titile: {
    marginTop: '33vh',
  },
});

const Profile = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.container} justify="center" alignItems="center">
      <Paper className={classes.root}>
        <Grid container className={classes.avatarGridContainer} justify="center">
          <div className={classes.avatarGridContainer}>
            <Avatar component={Paper} className={classes.avatarContainer}>
              <AccountCircle color="primary" className={classes.avatar} />
            </Avatar>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton component={Paper} className={classes.avatarButton}>
                <CloudUploadIcon style={{ fontSize: '5vmin' }} color="secondary" />
              </IconButton>
            </label>
          </div>
        </Grid>
sss
      </Paper>
    </Grid>
  );
};
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Profile);
