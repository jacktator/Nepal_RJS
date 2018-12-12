import React from 'react';
import Component from './Component';

class Retrieve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, loading } = this.state;
    return (
      <Component
        email={email}
        onChangeHandle={this.onChangeHandle}
        loading={loading}
      />
    );
  }
}

export default Retrieve;
