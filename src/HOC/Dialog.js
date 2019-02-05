/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoadingComponent from './Loading';

const styles = (theme) => {

};
const AlertDialog = (props) => {
  const {
    title, discription, open, handleClose, media, loadingStatus, selectMidExercise, exe, other, otherClickFunction,
  } = props;
  return (
    <div>
      <LoadingComponent open={loadingStatus} />
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent style={{ padding: media ? '0' : '24px' }}>
          {!!discription && (
          <DialogContentText color="primary" id="alert-dialog-description">
            {discription}
          </DialogContentText>
          )}
          {!discription && !media ? <img src="image/Questionnaire/sport.jpg" alt="" width="100%" /> : media}
          {/* {!!media && media} */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={
              loadingStatus
                ? e => e.preventDefault()
                : (exe ? () => selectMidExercise({ name: exe.name, progression_model: exe.progression_model }) : other ? otherClickFunction : handleClose)}
            color="primary"
            autoFocus
          >
          Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  media: PropTypes.element,
};

export default AlertDialog;
