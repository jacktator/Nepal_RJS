import React from 'react';
import { connect } from 'react-redux';
import { validation } from '../../../HOC/Validation';
import Loading from '../../../HOC/Loading';
import {
  getUserData, setQueryProfile, uploadPicture, updateUserData, handleUpdatePassword,
} from '../../action';
import Component from './Component';
import ConditionDialog from './condition';
import Edit from './edit';

class UserProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dob: '',
      weight: '',
      age: '',
      gender: '',
      oldPassword: '',
      newPassword: '',
      rePassword: '',
      updateInfoOpen: false,
      updatePasswordOpen: false,
      error: false,
      errorDiscription: '',
      conditionOpen: false,
    };
    this.initialState = this.initialState.bind(this);
    this.updataState = this.updataState.bind(this);
    this.openUpdataInfoDialog = this.openUpdataInfoDialog.bind(this);
    this.closeUpdataInfoDialog = this.closeUpdataInfoDialog.bind(this);
    this.openUpdataPasswordDialog = this.openUpdataPasswordDialog.bind(this);
    this.closeUpdataPasswordDialog = this.closeUpdataPasswordDialog.bind(this);
    this.handelAvatarChange = this.handelAvatarChange.bind(this);
    this.openErrorDialog = this.openErrorDialog.bind(this);
    this.closeErrorDialog = this.closeErrorDialog.bind(this);
    this.onInfoUpdateOKClick = this.onInfoUpdateOKClick.bind(this);
    this.onPassUpdateOkclick = this.onPassUpdateOkclick.bind(this);
    this.redirectToLogout = this.redirectToLogout.bind(this);
    this.openConditionDialog = this.openConditionDialog.bind(this);
    this.closeConditionDialog = this.closeConditionDialog.bind(this);
    this.updateDoD = this.updateDoD.bind(this);
    this.handleErrorUpdatePassword = this.handleErrorUpdatePassword.bind(this);
  }

  componentDidMount() {
    this.props.setQueryProfile(true);
    this.props.getUserData(this.initialState);
  }

  initialState(data) {
    const {
      name, dob, weight, age, gender,
    } = data;
    this.setState({
      name, dob, weight, age, gender,
    });
  }

  handelAvatarChange(event) {
    this.props.setQueryProfile(true);
    this.props.uploadPicture(event.target.files[0]);
  }

  updataState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateDoD(v) {
    this.setState({ dob: v });
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

  openErrorDialog() {
    this.setState({ error: true });
  }

  closeErrorDialog() {
    this.setState({ error: false });
  }

  openConditionDialog() {
    this.setState({ conditionOpen: true });
  }

  closeConditionDialog() {
    this.setState({ conditionOpen: false });
  }

  onInfoUpdateOKClick() {
    const {
      name, dob, weight, age, gender,
    } = this.state;
    this.closeUpdataInfoDialog();
    if (
      name !== this.props.name
      || dob !== this.props.dob
      || weight !== this.props.weight
      || age !== this.props.age
      || gender !== this.props.gender
    ) {
      this.props.setQueryProfile(true);
      this.props.updateUserData({
        name, dob, weight, age, gender,
      }, this.initialState);
    }
  }

  onPassUpdateOkclick() {
    const { oldPassword, newPassword, rePassword } = this.state;
    const passwordError = validation('password', newPassword);
    if (
      oldPassword === ''
      && newPassword === ''
      && rePassword === ''
    ) {
      this.closeUpdataPasswordDialog();
      return;
    }
    if (oldPassword === newPassword) {
      this.setState({ errorDiscription: 'new password should not be same as old password' });
      this.openErrorDialog();
      return;
    }
    if (newPassword !== rePassword) {
      this.setState({ errorDiscription: 'confirm password should be same as new password' });
      this.openErrorDialog();
      return;
    }
    if (!passwordError.error) {
      this.setState({ errorDiscription: passwordError.resDiscription });
      this.openErrorDialog();
      return;
    }
    this.props.setQueryProfile(true);
    this.closeUpdataPasswordDialog();
    this.props.handleUpdatePassword(
      { password: oldPassword, newPassword },
      this.redirectToLogout,
      this.handleErrorUpdatePassword,
    );
  }

  handleErrorUpdatePassword() {
    this.setState({ errorDiscription: 'old password is wrong' });
    this.setState({ oldPassword: '', newPassword: '', rePassword: '' });
    this.openErrorDialog();
  }

  redirectToLogout() {
    sessionStorage.clear();
    window.location.reload(true);
  }

  render() {
    const { queryProfile } = this.props;
    const {
      updateInfoOpen, updatePasswordOpen, name, dob, weight, oldPassword, newPassword, rePassword, error, errorDiscription, conditionOpen,
    } = this.state;
    return (
      <>
        <ConditionDialog
          open={conditionOpen}
          handleClose={this.closeConditionDialog}
        />
        <Loading open={queryProfile} />

        <Edit
          open={updateInfoOpen}
          handleClose={this.closeUpdataInfoDialog}
          handleSave={this.onInfoUpdateOKClick}
          updateDoD={this.updateDoD}
          dob={dob}
          weight={weight}
          name={name}
          error={error}
          updataState={this.updataState}
          closeUpdataPasswordDialog={this.closeUpdataPasswordDialog}
          onPassUpdateOkclick={this.onPassUpdateOkclick}
          updatePasswordOpen={updatePasswordOpen}
          queryProfile={queryProfile}
          errorDiscription={errorDiscription}
          closeErrorDialog={this.closeErrorDialog}
          oldPassword={oldPassword}
          rePassword={rePassword}
          newPassword={newPassword}
          openPassword={this.openUpdataPasswordDialog}
        />
        <Component
          {...this.state}
          {...this.props}
          update={this.updataState}
          openInfo={this.openUpdataInfoDialog}
          closeInfo={this.closeUpdataInfoDialog}
          closePassword={this.closeUpdataPasswordDialog}
          handelAvatarChange={this.handelAvatarChange}
          openConditionDialog={this.openConditionDialog}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    queryProfile, name, dob, avatar, weight, age, gender,
  } = state.UserConfig;
  return ({
    queryProfile, name, dob, avatar, weight, age, gender,
  });
}


export default connect(mapStateToProps, {
  getUserData, setQueryProfile, uploadPicture, updateUserData, handleUpdatePassword,
})(UserProfile);
