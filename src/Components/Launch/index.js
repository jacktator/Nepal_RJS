import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Launch extends Component {
  render() {
    return (
      <div className="Launch">
        <Link to='login'>
          <Button>Start</Button>
        </Link>
      </div>
    );
  }
}
