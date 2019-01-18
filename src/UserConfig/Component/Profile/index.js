import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { validation } from '../../../HOC/Validation';
import Dialog from '../../../HOC/Dialog';
import Loading from '../../../HOC/Loading';
import {
  getUserData, setQueryProfile, uploadPicture, updateUserData, handleUpdatePassword,
} from '../../action';
import Component from './Component';
import ConditionDialog from './condition';

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
    this.setState({ updatePasswordOpen: true });
  }

  closeErrorDialog() {
    this.setState({ updatePasswordOpen: false });
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
      this.setState({ errorDiscription: passwordError.discription });
      this.openErrorDialog();
      return;
    }
    this.props.setQueryProfile(true);
    this.closeUpdataPasswordDialog();
    this.props.handleUpdatePassword({ password: oldPassword, newPassword }, this.redirectToLogout);
  }

  redirectToLogout() {
    sessionStorage.clear();
    window.location.reload(true);
  }

  render() {
    const { queryProfile } = this.props;
    const {
      updateInfoOpen, updatePasswordOpen, name, dob, weight, gender, oldPassword, newPassword, rePassword, error, errorDiscription, conditionOpen,
    } = this.state;
    return (
      <>
        <ConditionDialog
          open={conditionOpen}
          handleClose={this.closeConditionDialog}
        />
        <Loading open={queryProfile} />
        <Dialog
          open={error}
          title="Error"
          loadingStatus={false}
          discription={errorDiscription}
          handleClose={this.closeErrorDialog}
        />
        <Dialog
          open={updateInfoOpen}
          handleClose={this.closeUpdataInfoDialog}
          loadingStatus={queryProfile}
          title="Update information"
          discription=""
          other
          otherClickFunction={this.onInfoUpdateOKClick}
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
              <Typography color="primary">Gender</Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="Gender"
                  name="gender"
                  value={gender}
                  onChange={this.updataState}
                >
                  <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                  <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                  <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                </RadioGroup>
              </FormControl>
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
          other
          otherClickFunction={this.onPassUpdateOkclick}
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
