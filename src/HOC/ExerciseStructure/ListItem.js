import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Champion from '../../Assets/icon/champion';

const ExerciseListItem = (props) => {
  const {
    latest, id, content, status, product, theme
  } = props;
  const { palette } = theme;
  const { primary } = palette;
  return (
    <ListItem divider style={{ height: 40 }}>
      {latest ? <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon> : <ListItemText primary={id + 1} />}
      <ListItemText primary={content} />
      {product ? <ListItemIcon><Champion a={primary.main} b={primary.main} c={primary.main} d={primary.main} /></ListItemIcon> : <ListItemText primary={status} />}
    </ListItem>
  );
};

ExerciseListItem.propTypes = {
  latest: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  product: PropTypes.bool.isRequired,
};

export default withTheme()(ExerciseListItem);
