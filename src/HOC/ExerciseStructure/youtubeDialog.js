/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
// import YouTube from 'react-youtube';
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
    const opts = {
      width: '100%',
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1,
    };
    console.log(youtbueID);
    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onYoutubeClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <ReactPlayer
            url={`${VIDEO_URL}${youtbueID[1]}`}
            // eslint-disable-next-line react/jsx-boolean-value
            playing={true}
            // eslint-disable-next-line react/jsx-boolean-value
            loop={true}
            // eslint-disable-next-line react/jsx-boolean-value
            controls={true}
            width="100%"
            height="400px"
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
