/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    backgroundColor: theme.profileBackground,
    marginTop: '20%',
    width: '92%',
    minHeight: '80vh',
  },
  menuButton: {
    position: 'fixed',
    top: '2vh',
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
    backgroundColor: theme.palette.primary.main,
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
    backgroundColor: theme.palette.primary.main,
  },
});

const Profile = (props) => {
  const {
    classes, name, dob, avatar, weight, openInfo,
    openPassword, handelAvatarChange, gender, age,
    openConditionDialog,
  } = props;
  return (
    <Grid container className={classes.container} justify="center" alignItems="center">
      <Paper className={classes.root}>
        <IconButton className={classes.menuButton} component={Link} to="/mainmenu" color="primary" aria-label="Menu">
          <LeftIcon style={{ fontSize: '30px' }} />
        </IconButton>
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
              <Typography className={classes.detailedLableHead} variant="h6" color="primary">Name:  </Typography>
              <Typography variant="h6" color="primary">{name}</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="primary">Gender:  </Typography>
              <Typography variant="h6" color="primary">{gender}</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="primary">Age:  </Typography>
              <Typography variant="h6" color="primary">{age}</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="primary">DoB:  </Typography>
              <Typography variant="h6" color="primary">{dob}</Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item container justify="flex-start">
              <Typography className={classes.detailedLableHead} variant="h6" color="primary">weight:  </Typography>
              <Typography variant="h6" color="primary">{weight}</Typography>
            </Grid>
            <Divider className={classes.divider} />
          </Grid>

          <Grid className={classes.contentContainer} container direction="column" justify="center" alignItems="center">
            <Button color="primary" component={Link} to="/questionnaire">Restart a new programme</Button>
            <Button color="primary" onClick={openInfo}>Update Information</Button>
            <Button color="primary" onClick={openPassword}>Change Password</Button>
            <Button color="primary" onClick={openConditionDialog}>View Terms and Conditions</Button>
            <Button color="primary" component={Link} to="/logout">Logout</Button>
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
