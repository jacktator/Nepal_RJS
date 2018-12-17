import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import { styles } from '../../styles';

const iconDisplay = (finish) => {
  switch (finish) {
    case true:
      return <FeedbackIcon />;
    default:
      return <RightIcon />;
  }
};

class SimpleList extends React.PureComponent {
  render() {
    const {
      classes, finish, days, currentWeek, progress,
    } = this.props;
    const starDayNumber = days * (currentWeek);
    return (
      !!progress && (
      <List className={classes.root} component="nav" disablePadding>
        {
            [...Array(days || 5)].map((v, k) => (
              <Link key={`day${starDayNumber + k + 1}`} style={{ width: '100%', height: '100%' }} to={`/workout/daily/${k + 1}`}>
                <ListItem divider disabled={starDayNumber + k + 1 > progress} className={classes.infoListItem} component={Paper} elevation={4}>
                  <ListItemText primary={(
                    <Typography variant="body1" color="secondary">{`Day ${starDayNumber + k + 1}`}</Typography>
                  )}
                  />
                  <ListItemIcon>{iconDisplay(finish)}</ListItemIcon>
                </ListItem>
              </Link>

            ))
        }
      </List>
      )
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object,
  days: PropTypes.number.isRequired,
  finish: PropTypes.bool,
  currentWeek: PropTypes.number.isRequired,
};

SimpleList.defaultProps = {
  finish: false,
};

export default withStyles(styles)(SimpleList);
