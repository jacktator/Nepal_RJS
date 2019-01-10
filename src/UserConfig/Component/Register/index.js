import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component from './Component';
import { registerAction, queryRegister, errorHappened } from '../../action';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  onRegisterClick() {
    const { email, password, rePassword } = this.state;
    if (password !== rePassword || password === '' || rePassword === '') {
      return;
    }
    this.props.queryRegister(true);
    this.props.registerAction({
      username: email,
      email,
      password,
    });
  }

  handleErrorClose() {
    this.props.errorHappened(false);
  }


  render() {
    const { registerStatus, queryRegisterStatus, error } = this.props;
    const {
      email, password, rePassword,
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
          error={error}
          handleErrorClose={this.handleErrorClose}
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
