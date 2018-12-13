import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SpeedDialTooltipOpen from '../HOC/speedDial';
import styles from './styles';

const menu = [{ name: 'Workout', color: 'rgba(0,96,100,0.5)', to: '/workout' }, { name: 'Rehab', color: 'rgba(86,200,216,0.5)', to: '/rehab' },
  { name: 'Profile', color: 'rgba(111,249,255,0.4)', to: '/user/profile' }, { name: 'Content', color: 'rgba(0,172,193,0.4)', to: '/mainmenu' },
  { name: 'Question', color: 'rgba(38,198,218,0.3)', to: '/mainmenu' }, { name: 'FAQ', color: 'rgba(136,255,255,0.3)', to: '/mainmenu' }];

class Mainmenu extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Grid container className={classes.container} direction="column" justify="space-between" alignItems="center">

          <SpeedDialTooltipOpen shadow />

          <Grid container className={classes.topGrid} justify="center" alignContent="center" alignItems="center">
            <Typography variant="h2" component="h2">Nepal</Typography>
          </Grid>

          <Grid container className={classes.menuGrid} justify="center" alignContent="center" alignItems="center">
            {menu.map(v => (
              <Grid key={v.name} style={{ backgroundColor: v.color, textDecoration: 'unset' }} justify="center" alignItems="center" className={classes.childGrid} container component={Link} to={v.to}>
                <Typography style={{ color: 'darkcyan' }} variant="h6" component="h6">{v.name}</Typography>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </div>
    );
  }
}

Mainmenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mainmenu);
