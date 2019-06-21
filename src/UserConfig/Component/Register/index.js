import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component from './Component';
import { registerAction, queryRegister, errorHappened } from '../../action';
import { validation } from '../../../HOC/Validation/index';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      emailError: {
        error: true,
        resDiscription: '',
      },
      passwordError: {
        error: true,
        resDiscription: '',
      },
      rePasswordError: {
        error: true,
        resDiscription: '',
      },
      loading: false,
      clicked: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onErrorChangeHandle = this.onErrorChangeHandle.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleCheckInputs = this.handleCheckInputs.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.state.clicked && this.onErrorChangeHandle(event);
  }

  onErrorChangeHandle(event) {
    if (event.target.name === 'rePassword') {
      const rePasswordError = event.target.value === this.state.password ? validation('password', event.target.value) : { error: false, resDiscription: 'should be same as password' };
      this.setState({ rePasswordError });
      return;
    }
    this.setState({ [`${event.target.name}Error`]: validation(event.target.name, event.target.value) });
  }

  onRegisterClick() {
    const { emailError, passwordError, rePasswordError } = this.handleCheckInputs();
    if (emailError.resDiscription != "" || passwordError.resDiscription != "" || rePasswordError.resDiscription != "") {
      this.setState({
        emailError, passwordError, rePasswordError
      });
      console.log("Js");
    }else{
      const { email, password } = this.state;
      this.props.queryRegister(true);
      this.props.registerAction({
        username: email,
        email,
        password,

      });
    }
  }

  handleCheckInputs() {
    const { email, password, rePassword } = this.state;
    const emailError = validation('email', email);
    const passwordError = validation('password', password);
    const rePasswordError = rePassword === password ? validation('password', rePassword) : { error: false, resDiscription: 'should be same as password' };
    return { emailError, passwordError, rePasswordError };
  }

  handleErrorClose() {
    this.props.errorHappened(false);
  }


  render() {
    const { registerStatus, queryRegisterStatus, error } = this.props;
    const {
      email, password, rePassword, loading, emailError, passwordError, rePasswordError,
    } = this.state;
    return (
      (registerStatus && queryRegisterStatus) ? (<Redirect to="/questionnaire" />) : (
        <Component
          loading={queryRegisterStatus}
          email={email}
          password={password}
          rePassword={rePassword}
          onChangeHandle={this.onChangeHandle}
          onRegisterClick={this.onRegisterClick}
          onErrorChangeHandle={this.onErrorChangeHandle}
          errorDialogOpenStatus={error}
          handleErrorClose={this.handleErrorClose}
          emailError={emailError}
          passwordError={passwordError}
          rePasswordError={rePasswordError}
        />
      )
    );
  }
}

Register.propTypes = {
  registerStatus: PropTypes.bool.isRequired,
  registerAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    registerStatus: state.UserConfig.RegisterStatus,
    queryRegisterStatus: state.UserConfig.queryRegisterStatus,
    error: state.UserConfig.error,
  };
}

export default connect(mapStateToProps, { registerAction, queryRegister, errorHappened })(Register);
