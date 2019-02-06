import React from 'react';
import Component from './Component';
import { validation } from '../../../HOC/Validation';

class Retrieve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: {
        error: true,
        resDiscription: '',
      },
      loading: false,
      clicked: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onRetrieveClick = this.onRetrieveClick.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.state.clicked && this.setState({ emailError: validation('email', event.target.value) });
  }

  onRetrieveClick() {
    const emailError = validation('email', this.state.email);
    if (!emailError.error) {
      this.setState({ emailError, clicked: true });
    }
  }

  render() {
    const { email, loading, emailError } = this.state;
    return (
      <Component
        email={email}
        emailError={emailError}
        onChangeHandle={this.onChangeHandle}
        onRetrieveClick={this.onRetrieveClick}
        loading={loading}
      />
    );
  }
}

export default Retrieve;
