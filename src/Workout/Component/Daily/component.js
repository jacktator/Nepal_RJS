import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Steper from './SteperComponent';
import { styles } from '../../styles';
import LoadingComponent from '../../../HOC/Loading';
import HOClistitem from '../HOC/listitem';
import Dialog from '../../../HOC/Dialog';

class SimpleList extends React.PureComponent {
  render() {
    const {
      classes, renderExercise, dailyQuery, openDialog, handleOpenDialog,
      handleClose, handleNext, handleBack, dialogSelected, selectedExercisesQuery,
      selectedExercises, dialogIndexSelected, selectDialogIndex, userKeepExercise, selectMidExercise, midSelectExercise,
      err, handleErrClose,
    } = this.props;
    console.log('selectedExercises--------------------------------------------------------------------------------------', selectedExercises);
    return (
      <div className={classes.root}>
        <LoadingComponent
          open={dailyQuery}
        />
        <Dialog
          open={err}
          loadingStatus={false}
          handleClose={handleErrClose}
          title="Error"
          discription="You need to select a exercise"
        />
        <Dialog
          open={openDialog}
          handleClose={handleClose}
          loadingStatus={false}
          exe={selectedExercises.length !== 0 ? selectedExercises[dialogIndexSelected][dialogSelected] : { name: '', progression_model: '' }}
          selectMidExercise={selectMidExercise}
          media={(
            <Steper
              handleNext={handleNext}
              handleBack={handleBack}
              dialogSelected={dialogSelected}
              tutorialSteps={selectedExercises}
              dialogIndexSelected={dialogIndexSelected}
              selectDialogIndex={selectDialogIndex}

            />
          )}
          discription=""
          title="Select your exercises"
        />
        <List component="nav" disablePadding>
          {!!renderExercise && renderExercise.length >= 0 && renderExercise.map((v, k) => (
            <HOClistitem
              key={`${v.name}${k}`}
              data={v}
              midSelectExercise={midSelectExercise}
              id={v.id}
              listID={k}
              handleOpenDialog={() => handleOpenDialog(v.id, k)}
              userKeepExercise={userKeepExercise}
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
