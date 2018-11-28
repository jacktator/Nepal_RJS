import React from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core/Button';

const AlertDialog = (props) => {
  const {
    title, discription, open, handleClose,
  } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText color="primary" id="alert-dialog-description">
            {discription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
                Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AlertDialog;
