import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Component from './Component';
import { loginAction } from '../../action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLoginClick() {
    const { email, password } = this.state;
    this.setState({ loading: true });
    this.props.loginAction({ username: email, password });
  }

  render() {
    const { loginStatus } = this.props;
    const { email, password, loading } = this.state;
    return (
      loginStatus ? (<Redirect to="/mainmenu" />) : (
        <Component
          email={email}
          password={password}
          loading={loading}
          onChangeHandle={this.onChangeHandle}
          onLoginClick={this.onLoginClick}
        />
      )
    );
  }
}

Login.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loginStatus: state.UserConfig.LoginStatus,
  };
}

export default connect(mapStateToProps, { loginAction })(Login);
