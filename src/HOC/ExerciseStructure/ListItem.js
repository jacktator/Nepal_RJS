import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Champion from '../../Assets/icon/champion';

const styles = ({
  leftGrid: {
    flex: 1,
    width: '10%',
  },
  midGrid: {
    flex: 1,
    width: '80%',
  },
  rightGrid: {
    flex: 1,
    width: '10%',
  },
});

const ExerciseListItem = (props) => {
  const {
    latest, id, content, status, product, theme, classes
  } = props;
  const { palette } = theme;
  const { primary } = palette;
  return (
    <ListItem divider style={{ flex: 1, height: 40, width: '100%' }}>

        <Grid container className={classes.leftGrid} alignItems="flex-start" justify="flex-start">
          {latest ? <CheckCircleIcon color="primary" /> : <Typography>{id + 1}</Typography>}
        </Grid>

        <Grid container className={classes.midGrid} alignItems="center" justify="flex-start">
          <Typography>{content}</Typography>
        </Grid>

        <Grid container className={classes.rightGrid} alignItems="flex-end" justify="flex-end">
          {product ? <Champion a={primary.main} b={primary.main} c={primary.main} d={primary.main} /> : <Typography>{status}</Typography>}
        </Grid>

    </ListItem>
  );
};

ExerciseListItem.propTypes = {
  latest: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  product: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(ExerciseListItem));
