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

const Component = (props) => {
  const {
    classes, starDayNumber, days, week, programmeID, renderProgrammeIndex,
  } = props;
  return (
    <List className={classes.root} component="nav">
      {[...Array((days * 1 || 5)).keys()].map((v, k) => (
        <Link key={starDayNumber + k + 1 || k} to={`./${programmeID}/${k}&${week}&${renderProgrammeIndex}`}>
          <ListItem className={classes.infoListItem} divider>
            <ListItemText
              primary={<Typography variant="body2" color="primary">{`Day${starDayNumber + k + 1}`}</Typography>}
            />
            <ListItemIcon><RightIcon /></ListItemIcon>
          </ListItem>

        </Link>
      ))}
    </List>
  );
};

export default withStyles(styles)(Component);
