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
  const { starDayNumber, days } = props;
  return (
    <List>
      {Array(days).map((v, k) => (
        <ListItem>
          <ListItemText
            primary={`day${starDayNumber + k + 1}`}
          />
          <ListItemIcon><RightIcon /></ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(styles)(Component);
