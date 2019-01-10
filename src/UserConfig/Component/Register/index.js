import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component from './Component';
import { registerAction } from '../../action';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      emailError: true,
      passwordError: true,
      rePasswordError: true,
      loading: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onErrorChangeHandle = this.onErrorChangeHandle.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onErrorChangeHandle(event, error) {
    this.setState({ [`${event.target.name}Error`]: error });
  }

  onRegisterClick() {
    const { email, password, rePassword } = this.state;
    if (password !== rePassword) {
      return;
    }
    this.setState({ loading: true });
    this.props.registerAction({
      username: email,
      email,
      password,
    });
  }

  render() {
    const { registerStatus } = this.props;
    const {
      email, password, rePassword, loading, emailError, passwordError, rePasswordError,
    } = this.state;
    console.log(emailError, passwordError, rePasswordError );
    return (
      registerStatus ? (<Redirect to="/questionnaire" />) : (
        <Component
          loading={loading}
          email={email}
          password={password}
          rePassword={rePassword}
          onChangeHandle={this.onChangeHandle}
          onRegisterClick={this.onRegisterClick}
          onErrorChangeHandle={this.onErrorChangeHandle}
          errorOrNot={!emailError && !passwordError && !rePasswordError}
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
  };
}

export default connect(mapStateToProps, { registerAction })(Register);
