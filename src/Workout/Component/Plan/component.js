import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import { styles } from '../../styles';

const iconDisplay = finish => (finish ? <FeedbackIcon color="primary" /> : <RightIcon color="primary" />);

const lockOpen = (finish, open) => (finish ? <CheckIcon color="primary" /> : (open ? <LockOpenIcon color="primary" /> : <LockIcon color="primary" />));

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
    } else if (!data.over24) {
      this.props.handleOver24Open();
      event.preventDefault();
    }
  }

  render() {
    const {
      classes, theme, finish, days, currentWeek, progress, over24, showTitle,
    } = this.props;
    const starDayNumber = days * (currentWeek);
    return (
      isNaN(progress) ? <div />
        : (
          <List className={classes.root} component="nav" disablePadding>
            {
            [...Array(days || 5)].map((v, k) => (
              <Link key={`day${(starDayNumber || 0) + k + 1}`} onClick={event => this.onItemClick(event, { current: starDayNumber + k + 1, finish, over24 })} style={{ width: '100%', minHeight: '48px' }} to={`/workout/daily/${k + 1}`}>
                <ListItem
                  disabled={~~starDayNumber + k + 1 !== ~~progress}
                  style={{
                    justifyContent: 'space-between', backgroundColor: theme.ListItem.backgroundColor, paddingTop: '0', paddingBottom: '0', marginTop: '4px', marginBottom: '4px', height: '88px',
                  }}
                >
                  <ListItemText
                    style={{ width: '20%', flex: 'unset' }}
                    primary={(
                      <>
                        <Typography align="center" variant="body1" color="primary">Day</Typography>
                        <Typography align="center" variant="body1" color="primary">{`${starDayNumber + k + 1}`}</Typography>
                      </>
                  )}
                  />
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                  }}
                  >
                    <div style={{
                      height: '32px', width: '1px', borderRight: k !== 0 ? '2px dashed silver' : '0',
                    }}
                    />
                    {lockOpen(~~starDayNumber + k + 1 < ~~progress, ~~starDayNumber + k + 1 === ~~progress)}
                    <div style={{
                      height: '32px', width: '1px', borderRight: k !== [...Array(days || 5)].length - 1 ? '2px dashed silver' : 0,
                    }}
                    />
                  </div>
                  <ListItemText
                    primary={(
                      <Typography align="center" variant="body1" color="primary">{showTitle}</Typography>
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

export default withStyles(styles, { withTheme: true })(SimpleList);
