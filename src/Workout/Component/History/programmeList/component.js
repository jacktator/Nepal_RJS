import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import { styles } from '../../../styles';

class History extends React.PureComponent {
  render() {
    const {
      classes, days, finish, historyProgrammeList,
    } = this.props;
    return (
      (!!historyProgrammeList && historyProgrammeList.length !== 0)
        ? (
          <List className={classes.root} component="nav" disablePadding>
            {
            [...historyProgrammeList].map((v, k) => (
              <Link key={v.id} to={`/workout/history/${v.id}`} style={{ height: '100%', width: '100%' }}>
                <ListItem className={classes.infoListItem} component={Paper} divider elevation={4}>
                  <ListItemText primary={(
                    <Typography variant="body2" color="secondary">{v.program_name}</Typography>)}
                  />
                  <ListItemText primary={(
                    <Typography variant="body2" color="secondary">{new Date(v.date).toDateString()}</Typography>)}
                  />
                  <ListItemIcon><RightIcon /></ListItemIcon>
                </ListItem>

              </Link>
            ))
        }
          </List>
        )
        : (
          <List className={classes.root} component="nav" disablePadding>
            <ListItem>
              <ListItemText
                primary={(
                  <Typography>You do not begin any programme</Typography>
              )}
              />
            </ListItem>
          </List>
        )
    );
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
  days: PropTypes.number,
  finish: PropTypes.bool,
};

export default withStyles(styles)(History);
