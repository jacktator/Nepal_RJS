/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import ReactPlayer from 'react-player';
import { Typography } from '@material-ui/core';
import { VIDEO_URL } from '../../config';


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
      fullScreen, open, title, youtbueID, onYoutubeClose, youtubeDiscription,
    } = this.props;
    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onYoutubeClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent style={{ height: 'unset' }}>
          <ReactPlayer
            url={`${VIDEO_URL}${youtbueID[1]}`}
            playing
            loop
            controls
            height="unset"
            width="100%"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <Typography style={{ marginTop: '20px' }} variant="body2" color="primary">{youtubeDiscription}</Typography>
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
