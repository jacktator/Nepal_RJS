import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Champion from '../../Assets/icon/champion';

const styles = theme => ({
  svg_icon: {
    fill: "primary",
  }
});

const ExerciseListItem = (props) => {
  const {
    latest, id, content, status, product, classes
  } = props;
  return (
    <ListItem divider>
      {latest ? <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon> : <ListItemText primary={id + 1} />}
      <ListItemText primary={content} />
      {product ? <ListItemIcon><Champion a="primary" b="primary" c="primary" d="primary" /></ListItemIcon> : <ListItemText primary={status} />}
    </ListItem>
  );
};

ExerciseListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  latest: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  product: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ExerciseListItem);
