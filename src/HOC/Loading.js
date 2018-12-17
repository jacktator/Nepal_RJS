import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

const AlertDialog = (props) => {
  const {
    open,
  } = props;
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Loading...</DialogTitle>
        <DialogContent style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </DialogContent>

      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default AlertDialog;
