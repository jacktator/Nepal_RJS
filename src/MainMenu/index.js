import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SpeedDialTooltipOpen from '../HOC/speedDial';

import styles from './styles';

const menu = theme => ([{
  name: 'Workout', color: theme.mainMenu.workout.color, opacity: theme.mainMenu.workout.opacity, to: '/workout',
},
{
  name: 'Rehab', color: theme.mainMenu.rehab.color, opacity: theme.mainMenu.rehab.opacity, to: '/rehab',
},
{
  name: 'Profile', color: theme.mainMenu.profile.color, opacity: theme.mainMenu.profile.opacity, to: '/user/profile',
},
{
  name: 'Content', color: theme.mainMenu.content.color, opacity: theme.mainMenu.content.opacity, to: '/mainmenu',
},
{
  name: 'Question', color: theme.mainMenu.question.color, opacity: theme.mainMenu.question.opacity, to: '/mainmenu',
},
{
  name: 'FAQ', color: theme.mainMenu.FAQ.color, opacity: theme.mainMenu.FAQ.opacity, to: '/mainmenu',
}]);
class Mainmenu extends React.PureComponent {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.background}>
        <Grid container className={classes.container} direction="column" justify="space-between" alignItems="center">
          <SpeedDialTooltipOpen shadow right mainmenu />
          <Grid container className={classes.topGrid} justify="center" alignContent="center" alignItems="center">
            <CardMedia style={{ width: '100%', height: '110px', backgroundSize: 'auto' }} image="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" />
          </Grid>

          <Grid container className={classes.menuGrid} justify="center" alignContent="center" alignItems="center">
            {menu(theme).map(v => (
              <Grid key={v.name} justify="center" alignItems="center" container className={classes.childGrid} component={Link} to={v.to}>
                <div style={{ backgroundColor: v.color, opacity: v.opacity, textDecoration: 'unset' }} className={classes.childGrid} />
                <Typography style={{ color: 'darkcyan', position: 'absolute' }} variant="h6" component="h6">{v.name}</Typography>
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

export default withStyles(styles, { withTheme: true })(Mainmenu);
