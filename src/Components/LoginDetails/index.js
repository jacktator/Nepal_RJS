//@flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {InputItem, WingBlank,Button, NoticeBar } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginDetails.css';
import LogoLocation from '../LogoLocation';

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

type State={

  loading: boolean,

}

type Props = {
  foo: number,
  email: string,
  form: string,
  password: number,
  onClickButton: Function,
  onChangeEmail: Function,
  onChangePassword: Function,
  pageChange: Function,
  token: string,

};


class LoginDetails extends Component<Props, State> {
  constructor(props){
    super(props);
    this.state={
      loading: false,
    }
  }

  successfulLogin = (token) =>{
    if(!token){
      const loading = !this.state.loading
      this.setState({loading})
    }
  }

  // callFunction=(email, password)=>{
  //     ()=>this.props.onClickButton(email, password)
  //     if(!this.props.token){
  //       return(
  //
  //       )
  //     }
  //     return (
  //
  //     )
  // }


  render() {
    const {email, password, token} = this.props;
    console.log(email)
    console.log(password)
    console.log(token)

    return (
      <div className="screen-logindetails-style">
        <div className="logo-logindetails-position">
          <LogoLocation/>
        </div>
        <div className="input-info-style">
          <InputItem
            value={email}
            type="text"
            name="email"
            onChange={(value)=>this.props.onChangeEmail(value)}
            onExtraClick = {()=> console.log('onExtraClick')}
            onErrorClick = {()=> console.log('onErrorClick')}
          >
            <div style={humeniconstyle} />
          </InputItem>
          <InputItem
            value={password}
            type="password"
            name="password"
            onChange={(value)=>this.props.onChangePassword(value)}
          >
            <div style={lockerstyle} />
          </InputItem>
          <div >
            <WingBlank>
              <Button
                type="primary"
                className="login-button-style"
                onClick={()=>this.props.onClickButton(email, password)}
                loading={this.state.loading}
              >
                Submit
              </Button>
            </WingBlank>
          </div>
        </div>

        <div className="forgetpassword-style">
          <Link to='/forgetpassword' style={{color: '#bbb'}}>
            Forget Password?
          </Link>
        </div>
        <div className="doyouhaveaccount-style" >
          Do not have account?
        </div>
        <div>
          <WingBlank>
            <Link to='/signup' >
              <Button>Register</Button>
            </Link>
          </WingBlank>
        </div>
      </div>
    );
  }
}

const LoginDetailsWrapper = createForm()(LoginDetails);

export default LoginDetailsWrapper;




// {!token? <div>Submit</div>: <Link to="/questionnaire"><div>Submit</div></Link>}

  // {this.props.status ?
  //   <div><Link to="/questionnaire">Submit</Link></div>
  // :
  //   null
  // }

  // constructor(props){
  //   super(props);
  //   this.state={
  //     email:'',
  //     password:'',
  //     name: '',
  //   }
  // }

  // componentDidMount() {
  //   // this.autoFocusInst.focus();
  // }
  // handleClick = () => {
  //   this.customFocusInst.focus();
  // }
  //
  // //Handle the input of the field to the state
  // inputHandler = (key, val) => {
  //   let login = { ...this.state.login};
  //   login[key] = val;
  //   this.setState({login});
  // }
  //
  // //Handle the click event for login button
  // loginClickHandler = () => {
  //   this.props.loginDetails(this.state.login);
  // }

  // getPassword=(e)=>{
  //   e.preventDefault();
  //   const password = e.target.password.value;
  //   console.log('now i get the password value is : '+ password);
  //   this.props.addPassword(password);
  // }
  //

  //this function is for input values(onChange())
    // handleChange = (value) => {
    //   this.setState({email: value});
    //   console.log(this.state.email);
    // }

    // submitInfo=(e)=>{
    //   e.preventDefault();
    //   console.log('this is working ')
    // }

  //this function is for submit value(onSubmit())
    // componentWillUpdate(nextProps, nextState){
    //   window.localStorage.setItem('token', this.props.LoginState.token);
    //   console.log("I have got the token value :" + window.localStorage.token)
    // }

    // getInput = (e) =>{
    //   e.preventDefault();
    //   const email = e.target.email.value;
    //   //console.log('now i get the email value is : '+ email);
    //   const password = e.target.password.value;
    //   //console.log('now i get the password value is : '+ password);
    //   this.props.LoginAction(email,password);
    //
    // }
