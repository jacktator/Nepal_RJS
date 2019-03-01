import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';
import { validation } from '../../../HOC/Validation';
import { retrievePassword } from '../../action';


class Retrieve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      dialogDiscription: '',
      emailError: {
        error: true,
        resDiscription: '',
      },
      showDialog: false,
      loading: false,
      clicked: false,
      succ: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onRetrieveClick = this.onRetrieveClick.bind(this);
    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.state.clicked && this.setState({ emailError: validation('email', event.target.value) });
  }

  onRetrieveClick() {
    const emailError = validation('email', this.state.email);
    if (!emailError.error) {
      this.setState({ emailError, clicked: true });
    } else {
      this.setState({ loading: true });
      this.props.retrievePassword(this.state.email, this.successCallback, this.errorCallback);
    }
  }

  successCallback() {
    this.setState({
      showDialog: true,
      succ: true,
      loading: false,
      dialogDiscription: 'Reset Password link had been send to your email.',
    });
  }

  errorCallback(res) {
    this.setState({
      showDialog: true,
      dialogDiscription: res,
      loading: false,
    });
  }

  handleCloseDialog() {
    this.setState({
      showDialog: false,
      dialogDiscription: '',
    });
    this.state.succ && (window.location.href = '/');
  }


  render() {
    const {
      email, loading, emailError, dialogDiscription, showDialog,
    } = this.state;
    return (
      <Component
        email={email}
        emailError={emailError}
        onChangeHandle={this.onChangeHandle}
        onRetrieveClick={this.onRetrieveClick}
        loading={loading}
        dialogDiscription={dialogDiscription}
        showDialog={showDialog}
        handleCloseDialog={this.handleCloseDialog}
      />
    );
  }
}

export default connect(null, { retrievePassword })(Retrieve);
