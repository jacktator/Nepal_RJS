import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component from './Component';
import { loginAction, queryLogin, errorHappened } from '../../action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLoginClick() {
    const { email, password } = this.state;
    this.props.queryLogin(true);
    this.props.loginAction({ username: email, password });
  }

  handleErrorClose() {
    this.props.errorHappened(false);
  }


  render() {
    const {
      email, password,
    } = this.state;
    const { loginStatus, queryLoginStatus, error } = this.props;
    return (
      (queryLoginStatus && loginStatus) ? (<Redirect to="/mainmenu" />) : (
        <Component
          error={error}
          email={email}
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
