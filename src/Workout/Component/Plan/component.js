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
      return <FeedbackIcon color="secondary" />;
    default:
      return <RightIcon />;
  }
};

class SimpleList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(event, data) {
    if (~~data.current !== ~~this.props.progress) {
      event.preventDefault();
    } else if (~~data.current === ~~this.props.progress && data.finish) {
      event.preventDefault();
      this.props.handleQuestionnaireOpen();
    }
  }

  render() {
    const {
      classes, finish, days, currentWeek, progress,
    } = this.props;
    const starDayNumber = days * (currentWeek);
    return (
      isNaN(progress) ? <div />
        : (
          <List className={classes.root} component="nav" disablePadding>
            {
            [...Array(days || 5)].map((v, k) => (
              <Link key={`day${(starDayNumber || 0) + k + 1}`} onClick={event => this.onItemClick(event, { current: starDayNumber + k + 1, finish })} style={{ width: '100%', height: '100%' }} to={`/workout/daily/${k + 1}`}>
                <ListItem divider disabled={~~starDayNumber + k + 1 !== ~~progress} style={~~starDayNumber + k + 1 < ~~progress ? { backgroundColor: '#4caf50' } : null} className={classes.infoListItem} component={Paper} elevation={4}>
                  <ListItemText primary={(
                    <Typography variant="body1" color="secondary">{`Day ${starDayNumber + k + 1}`}</Typography>
                  )}
                  />
                  <ListItemIcon>{iconDisplay(starDayNumber + k + 1 === progress * 1 ? finish : false)}</ListItemIcon>
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
