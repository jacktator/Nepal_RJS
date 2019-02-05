import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component from './Component';
import { loginAction, queryLogin, errorHappened } from '../../action';
import { validation } from '../../../HOC/Validation';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: {
        error: true,
        resDiscription: '',
      },
      password: '',
      passwordError: {
        error: true,
        resDiscription: '',
      },
      clicked: false,
    };
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleCheckInputs = this.handleCheckInputs.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.state.clicked && this.setState({ [`${event.target.name}Error`]: validation(event.target.name, event.target.value) });
  }

  onLoginClick() {
    const { emailError, passwordError } = this.handleCheckInputs();
    if (!emailError.error && !passwordError.error) {
      this.setState({ emailError, passwordError, clicked: true });
      return;
    }
    const { email, password } = this.state;
    this.props.queryLogin(true);
    this.props.loginAction({ username: email, password });
  }

  handleCheckInputs() {
    const { email, password } = this.state;
    const emailError = validation('email', email);
    const passwordError = validation('password', password);
    return { emailError, passwordError };
  }

  handleErrorClose() {
    this.props.errorHappened(false);
  }


  render() {
    const {
      email, password, emailError, passwordError,
    } = this.state;
    const { loginStatus, queryLoginStatus, error } = this.props;
    return (
      (queryLoginStatus && loginStatus) ? (<Redirect to="/mainmenu" />) : (
        <Component
          error={error}
          email={email}
          emailError={emailError}
          passwordError={passwordError}
          password={password}
          loading={queryLoginStatus}
          onLoginClick={this.onLoginClick}
          onChangeHandle={this.onChangeHandle}
          handleErrorClose={this.handleErrorClose}
        />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.UserConfig.error,
    loginStatus: state.UserConfig.LoginStatus,
    queryLoginStatus: state.UserConfig.queryLoginStatus,
  };
}

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { queryLogin, loginAction, errorHappened })(Login);
