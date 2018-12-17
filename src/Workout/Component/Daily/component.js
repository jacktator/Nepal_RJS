import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Dialog from '../../../HOC/Dialog';
import HOClistitem from '../HOC/listitem';
import LoadingComponent from '../../../HOC/Loading';
import { styles } from '../../styles';

class SimpleList extends React.PureComponent {
  render() {
    const {
      classes, renderExercise, dailyQuery, openDialog, handleOpenDialog, handleClose,
    } = this.props;
    return (
      <div className={classes.root}>
        <LoadingComponent open={dailyQuery} />
        <Dialog open={openDialog} handleClose={handleClose} discription="" title="Select your exercises" />
        <List component="nav" disablePadding>
          {!!renderExercise && renderExercise.length >= 0 && renderExercise.map((v, k) => (
            <HOClistitem
              key={`${v.name}${k}`}
              data={v}
              handleOpenDialog={handleOpenDialog}
            />
          ))}
        </List>
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
  dailyQuery: PropTypes.bool,
  renderExercise: PropTypes.array,
};

export default withStyles(styles)(SimpleList);
