import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
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

const Splash = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid className={classes.gridRoot} container spacing={0} justify="space-between" alignItems="stretch" direction="column">
        <Grid container className={classes.autoFlex}>
          <Paper className={classes.root}>
            <Typography className={classes.titile} variant="h2" component="h3" align="center" color="textSecondary" gutterBottom>Nepal</Typography>
          </Paper>
        </Grid>
        <Grid container style={{ height: '10vh' }} justify="center">
          <Button disableTouchRipple className={classes.button} color="primary">Get Started</Button>
        </Grid>
      </Grid>

    </div>
  );
};
Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Splash);
