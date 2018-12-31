import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ExerciseListItem = (props) => {
  const {
    latest, id, content, status,
  } = props;
  return (
    <ListItem divider>
      {latest ? <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon> : <ListItemText primary={id + 1} />}
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
