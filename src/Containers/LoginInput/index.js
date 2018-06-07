import React, {Component} from 'react';
import {InputItem, WingBlank, Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import {Link} from 'react-router-dom';
import './LoginInput.css';

var lockerstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/lock.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}

var humeniconstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/gender-neutral-user.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}

class LoginInput extends Component{
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  clickHandler = () => {
    console.log();
  }

  render(){
    return(
      <div className="input-info-style">
        <form className="form" onSubmit={this.props.getInput}>
          <InputItem
            placeholder="E-mail"
            type="text"
            name="email"

          >
            <div style={humeniconstyle} />
          </InputItem>
          <InputItem
            placeholder="Password"
            type="password"
            name="password"
            // ref={re => this.inputValue = re}
            // onChange={this.props.handleChange}
          >
            <div style={lockerstyle} />
          </InputItem>
          <div >
            <button className="login-button-style" ><Button type="primary">Submit</Button></button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginInput;
