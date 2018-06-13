//@flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginDetails.css';
import LogoLocation from '../LogoLocation';
import {connect} from 'react-redux';

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

type Props = {
  foo: number,
  email: string,
  form: string,
  password: number,
  onClickButton: Function,
  onChangeEmail: Function,
  onChangePassword: Function,
  pageChange: Function,
};




class LoginDetails extends Component<Props> {

  render() {
    const {email, password} = this.props
    return (
      <div className="screen-logindetails-style">
        <div className="logo-logindetails-position">
          <LogoLocation/>
        </div>
        <div className="input-info-style">
          <form onSubmit={this.props.pageChange}>
            <InputItem
              value={email}
              type="text"
              name="email"
              onChange={this.props.onChangeEmail}
            >
              <div style={humeniconstyle} />
            </InputItem>
            <InputItem
              value={password}
              type="password"
              name="password"
              onChange={this.props.onChangePassword}
            >
              <div style={lockerstyle} />
            </InputItem>
            <div >
              <button className="login-button-style" onClick={this.props.onClickButton}>
                <Button type="primary">
                  Submit
                </Button>
              </button>
            </div>
          </form>
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
  // infoSubmit=(e)=>{
  //   e.preventDefault();
  //   const user = {
  //     name: this.state.name,
  //   };
  //
  //   axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
  //   .then((res)=>{
  //     console.log(res);
  //   })
  // }

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
