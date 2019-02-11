/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import HOCDialog from '../../../HOC/Dialog';
import SwipeableTemporaryDrawer from '../../../HOC/swipableSelect';


const Transition = props => <Slide direction="up" {...props} />;

const EditPage = (props) => {
  const {
    open, handleClose, handleSave, dob, weight, name, updataState, updateDoD,
    updatePasswordOpen, error, closeUpdataPasswordDialog, errorDiscription,
    closeErrorDialog, openPassword, queryProfile, onPassUpdateOkclick,
    newPassword, oldPassword, rePassword,
  } = props;
  console.log(error);
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar position="relative" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton color="primary" onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="primary" style={{ flexGrow: 1 }}>
            Edit your profile
          </Typography>
          <Button color="primary" onClick={handleSave}>
            Submit
          </Button>
        </Toolbar>
      </AppBar>

      <HOCDialog
        open={error}
        title="Error"
        loadingStatus={false}
        discription={errorDiscription}
        handleClose={closeErrorDialog}
      />
      <HOCDialog
        open={updatePasswordOpen}
        handleClose={closeUpdataPasswordDialog}
        loadingStatus={queryProfile}
        title="Change password"
        other
        otherClickFunction={onPassUpdateOkclick}
        discription=""
        media={(
          <div style={{ padding: '24px' }}>
            <Typography color="primary">Old Password</Typography>
            <Input
              value={oldPassword}
              name="oldPassword"
              onChange={updataState}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Typography color="primary">New Password</Typography>
            <Input
              value={newPassword}
              name="newPassword"
              onChange={updataState}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Typography color="primary">Repeat Password</Typography>
            <Input
              value={rePassword}
              name="rePassword"
              onChange={updataState}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </div>
          )}
      />


      <Grid container style={{ height: '100%' }} direction="row" justify="space-around">
        <div style={{ padding: '24px' }}>
          <Input
            style={{ height: '16vmin' }}

            fullWidth
            value={name}
            name="name"
            onChange={updataState}
            inputProps={{
              style: { textAlign: 'right' },
              'aria-label': 'Description',
            }}
            startAdornment={
              <Typography color="primary" variant="body1">NAME: </Typography>
        }
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              fullWidth
              value={dob}
              disableFuture
              InputProps={
                {
                  style: { height: '16vmin' },
                  inputProps: {
                    style: { textAlign: 'right' },
                    'aria-label': 'Description',
                  },
                  startAdornment: (<Typography color="primary" variant="body1">DoB: </Typography>),
                }
            }
              format="dd/MM/yyyy"
              onChange={updateDoD}
              initialFocusedDate={new Date()}
            />
          </MuiPickersUtilsProvider>
          <SwipeableTemporaryDrawer
            profile
            id="weight"
            label="WEIGHT"
            value={weight}
            onChange={updataState}
            unit="kg"
            content={
                [...Array(280).keys()].map(v => `${v + 20} kg`)
              }
          />
        </div>
        <Button style={{ color: 'red' }} disableRipple onClick={openPassword}>Change Password</Button>
      </Grid>
    </Dialog>
  );
};


export default EditPage;
