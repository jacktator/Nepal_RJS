import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SpeedDialTooltipOpen from '../HOC/speedDial';

import styles from './styles';

const menu = (theme) => {
  const {
    workout, profile, question, rehab, content, FAQ,
  } = theme.mainMenu;
  return ([
    {
      name: 'Workout', color: workout.color, opacity: workout.opacity, to: '/workout',
    },
    {
      name: 'Rehab', color: rehab.color, opacity: rehab.opacity, to: '/rehab',
    },
    {
      name: 'Profile', color: profile.color, opacity: profile.opacity, to: '/user/profile',
    },
    {
      name: 'Question', color: question.color, opacity: question.opacity, to: '/mainmenu',
    },
    {
      name: 'Content', color: content.color, opacity: content.opacity, to: '/mainmenu',
    },
    {
      name: 'FAQ', color: FAQ.color, opacity: FAQ.opacity, to: '/mainmenu',
    }]);
};
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
