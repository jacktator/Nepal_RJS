/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ResponsiveDialog(props) {
  const {
    classes, fullScreen, history, onHistoryClose, historyForSpecificExercise,
  } = props;
  return (
    <Dialog
      fullScreen={fullScreen}
      open={history}
      onClose={onHistoryClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">History</DialogTitle>
      <DialogContent>
        <List className={classes.root}>
          {historyForSpecificExercise.length === 0
            ? (
              <ListItem>
                <ListItemText primary="Do not have history" />
              </ListItem>
            )
            : [...historyForSpecificExercise].map((v, k) => (
              <ListItem key={`${k}list`}>
                <ListItemText primary={new Date(v.date).toDateString()} />
                {
              !!v.exe && [...v.exe.split(';').map(va => va.substring(1, va.length - 1))].map((vb, kb) => {
                const a = vb.split(',');
                return (
                  <ListItemText key={`${kb}listtext`} primary={a.length === 0 ? `reps: ${a[0]}` : `reps: ${a[0]} X weight: ${a[1]}`} />
                );
              })
            }
              </ListItem>
            )) }
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHistoryClose} color="primary" autoFocus>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ResponsiveDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withMobileDialog()(withStyles(styles)(ResponsiveDialog));
