import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Component from './Component';
import { getUserData, setQueryProfile, uploadPicture } from '../../action';
import Loading from '../../../HOC/Loading';
import Dialog from '../../../HOC/Dialog';

class UserProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dob: '',
      weight: '',
      oldPassword: '',
      newPassword: '',
      rePassword: '',
      updateInfoOpen: false,
      updatePasswordOpen: false,
    };
    this.initialState = this.initialState.bind(this);
    this.updataState = this.updataState.bind(this);
    this.openUpdataInfoDialog = this.openUpdataInfoDialog.bind(this);
    this.closeUpdataInfoDialog = this.closeUpdataInfoDialog.bind(this);
    this.openUpdataPasswordDialog = this.openUpdataPasswordDialog.bind(this);
    this.closeUpdataPasswordDialog = this.closeUpdataPasswordDialog.bind(this);
    this.handelAvatarChange = this.handelAvatarChange.bind(this);
  }

  componentDidMount() {
    this.props.setQueryProfile(true);
    this.props.getUserData(this.initialState);
  }

  initialState(data) {
    const { name, dob, weight } = data;
    this.setState({
      name, dob, weight,
    });
  }

  handelAvatarChange(event) {
    console.log(event.target.files[0]);
    this.props.setQueryProfile(true);
    this.props.uploadPicture(event.target.files[0]);
  }

  updataState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  openUpdataInfoDialog() {
    this.setState({ updateInfoOpen: true });
  }

  closeUpdataInfoDialog() {
    this.setState({ updateInfoOpen: false });
  }

  openUpdataPasswordDialog() {
    this.setState({ updatePasswordOpen: true });
  }

  closeUpdataPasswordDialog() {
    this.setState({ updatePasswordOpen: false });
  }

  render() {
    const { queryProfile } = this.props;
    const {
      updateInfoOpen, updatePasswordOpen, name, dob, weight, oldPassword, newPassword, rePassword,
    } = this.state;
    return (
      <>
        <Loading open={queryProfile} />
        <Dialog
          open={updateInfoOpen}
          handleClose={this.closeUpdataInfoDialog}
          loadingStatus={queryProfile}
          title="Update information"
          discription=""
          media={
            <>
              <Typography color="primary">Name</Typography>
              <Input
                value={name}
                name="name"
                onChange={this.updataState}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Typography color="primary">DoB</Typography>
              <Input
                value={dob}
                name="dob"
                onChange={this.updataState}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Typography color="primary">Weight</Typography>
              <Input
                value={weight}
                name="weight"
                onChange={this.updataState}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
            </>
          }
        />
        <Dialog
          open={updatePasswordOpen}
          handleClose={this.closeUpdataPasswordDialog}
          loadingStatus={queryProfile}
          title="Change password"
          discription=""
          media={
            <>
              <Typography color="primary">Old Password</Typography>
              <Input
                value={oldPassword}
                name="oldPassword"
                onChange={this.updataState}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Typography color="primary">New Password</Typography>
              <Input
                value={newPassword}
                name="newPassword"
                onChange={this.updataState}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Typography color="primary">Repeat Password</Typography>
              <Input
                value={rePassword}
                name="rePassword"
                onChange={this.updataState}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
            </>}
        />
        <Component
          {...this.state}
          {...this.props}
          update={this.updataState}
          openInfo={this.openUpdataInfoDialog}
          openPassword={this.openUpdataPasswordDialog}
          closeInfo={this.closeUpdataInfoDialog}
          closePassword={this.closeUpdataPasswordDialog}
          handelAvatarChange={this.handelAvatarChange}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    queryProfile, name, bod, avatar, weight,
  } = state.UserConfig;
  return ({
    queryProfile, name, bod, avatar, weight,
  });
}


export default connect(mapStateToProps, { getUserData, setQueryProfile, uploadPicture })(UserProfile);
