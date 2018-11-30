import React from 'react';
import {
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import CheckCircle from '@material-ui/icons/CheckCircle';

const ExerciseListItem = (props) => {
  const {
    latest, id, content, status,
  } = props;
  return (
    <ListItem divider>
      {latest ? <ListItemIcon><CheckCircle color="primary" /></ListItemIcon> : <ListItemText primary={id} />}
      <ListItemText primary={content} />
      <ListItemText primary={status} />
    </ListItem>
  );
};

ExerciseListItem.propTypes = {
  latest: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default ExerciseListItem;
