/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import YouTube from 'react-youtube';

class ResponsiveDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
    };

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  render() {
    const {
      fullScreen, open, title, youtbueID, onYoutubeClose,
    } = this.props;
    const opts = {
      width: '100%',
    };
    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onYoutubeClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <YouTube
            opts={opts}
            videoId={youtbueID}
            onReady={this.onReady}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onYoutubeClose} color="primary" autoFocus>
              close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
