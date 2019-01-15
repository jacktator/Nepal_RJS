/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '20%',
    width: '92%',
    minHeight: '80vh',
  },
  container: {
    backgroundColor: '#e1e2e1',
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
    overflowY: 'scroll',
  },
  contentContainer: {
    position: 'relative',
    marginTop: '15%',
    width: '94%',
  },
  avatarGridContainer: {
    position: 'relative',
  },
  avatarContainer: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: '-15vmin',
    height: '15vmax',
    width: '15vmax',
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
  detailedLableHead: {
    width: '30%',
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
});

const Profile = (props) => {
  const {
    classes, name, bod, avatar, weight, openInfo,
    openPassword, handelAvatarChange,
  } = props;
  return (
    <Grid container className={classes.container} justify="center" alignItems="center">
      <Paper className={classes.root}>
        <Grid container className={classes.avatarGridContainer} justify="center">

          <Grid className={classes.avatarGridContainer}>
            <Avatar className={classes.avatarContainer} component={Paper} alt="avatar" src={avatar} />
            <input accept="image/*" onChange={handelAvatarChange} className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton className={classes.avatarButton} component={Paper}>
                <CloudUploadIcon style={{ fontSize: '5vmin' }} color="secondary" />
              </IconButton>
            </label>
          </Grid>

          <Grid container className={classes.contentContainer} spacing={16} direction="column" justify="space-around">
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="secondary">Name:  </Typography>
              <Typography variant="h6" color="secondary">{name}</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="secondary">DoB:  </Typography>
              <Typography variant="h6" color="secondary">{bod}</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="secondary">weight:  </Typography>
              <Typography variant="h6" color="secondary">{weight} KG</Typography>
            </Grid>
            <Divider className={classes.divider} />
          </Grid>

          <Grid className={classes.contentContainer} container direction="column" justify="center" alignItems="center">
            <Button color="secondary" onClick={openInfo}>Update Information</Button>
            <Button color="secondary" onClick={openPassword}>Change Password</Button>
            <Button color="secondary">View Terms and Conditions</Button>
            <Button color="secondary" component={Link} to="/logout">Logout</Button>
          </Grid>

        </Grid>
      </Paper>
    </Grid>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
