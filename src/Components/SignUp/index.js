
import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { List, InputItem, WingBlank, Button,} from 'antd-mobile';
import { createForm } from 'rc-form';
import './SignUp.css';
import Logo from '../../Assets/LogoLighter.png';
import {Redirect} from 'react-router-dom';

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
var emailiconstyle={
  backgroundImage: 'url(https://png.icons8.com/ios/50/000000/new-post.png)',
  backgroundSize: 'cover',
  height: '22px',
  width: '22px',
}
type Props={
  username: string,
  email:string,
  password: number,
  onChangeEmail: Function,
  onChangePassword: Function,
  onChangeUsername: Function,
  onClickButton: Function,
  state: Object,
}

type State={
  able: boolean,
}

class SignUp extends Component<Props, State> {
  constructor(props){
    super(props)
    this.state={
      able: false,
    }
  }

  onAbleChange(){
    const{username, email, password} = this.props.state
    const able = !this.state.able;
    this.props.onClickButton(username, email, password)
    this.setState({able})
  }

  render() {
    const {username, email, password}= this.props.state;
    // const {able} = this.state
    document.body.style = 'background: white';
    return (
      <div className="sign-up">
        {/* logo block*/}
        <div className="logo-signup-position">
          <img src={Logo} className="logo" alt="logo"/>
        </div>
        {/* sign up input block*/}
        <div className="signup-info-style">
          <List>
            <InputItem
              value={username}
              type="text"
              name="username"
              onChange={(value)=>this.props.onChangeUsername(value)}
            >
              <div style={humeniconstyle} />
            </InputItem>
            <InputItem
              value={email}
              type="text"
              name="email"
              onChange={(value)=>this.props.onChangeEmail(value)}
            >
              <div style={emailiconstyle} />
            </InputItem>
            <InputItem
              value={password}
              type="password"
              name="password"
              onChange={(value)=>this.props.onChangePassword(value)}
            >
              <div style={lockerstyle} />
            </InputItem>
          </List>
        </div>
        <div>
          <WingBlank>
            <Button
              type="primary"
              onClick={()=>this.onAbleChange()}
              loading={this.state.able}
            >
              Create Account
            </Button>
            {this.props.state.error && this.props.history.go(0)}
            {this.props.state.fetch===200 && <Redirect to="/questionnaire" />}
          </WingBlank>
        </div>
        <div className="checkbox">
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com"> By registering, you agree to our terms and conditions </a>
        </div>
      </div>
    );
  }
}
  const SignUpWrapper = createForm()(SignUp);

  export default SignUpWrapper;
