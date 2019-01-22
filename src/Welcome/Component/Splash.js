import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import sk8 from '../../Assets/sk8tech.png';
import am from '../../Assets/am.png';


const Splash = (props) => {
  const { theme } = props;
  const { logo } = theme;
  const styles = {
    root: {
      backgroundColor: theme.splashPageBackground.color,
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
  };
  return (
    <div style={styles.container}>
      <Grid style={styles.gridRoot} container spacing={0} justify="space-between" alignItems="stretch" direction="column">
        <Grid container style={styles.autoFlex}>
          <Paper style={styles.root}>
            <Grid container style={{ height: '100%' }} direction="column" justify="space-around">
              <Grid item container direction="column" justify="center">
                <Grid item>
                  <CardMedia style={{ height: '110px', backgroundSize: 'auto' }} image={logo} />
                </Grid>
                <Typography variant="h6" component="h6" align="center" color="primary" gutterBottom>Smarter Way To Buy & Sell</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-around">
                <Grid item style={{ width: '50%' }}>
                  <CardMedia style={{ height: '50px', backgroundSize: 'auto' }} image={am} />
                </Grid>
                <Grid item style={{ width: '50%' }}>
                  <CardMedia style={{ height: '50px', backgroundSize: 'auto' }} image={sk8} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container style={{ height: '10vh' }} justify="center">
          <Button fullWidth component={Link} to="/user" style={styles.button} color="primary">Get Started</Button>
        </Grid>
      </Grid>
    </div>
  );
};

Splash.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(Splash);
