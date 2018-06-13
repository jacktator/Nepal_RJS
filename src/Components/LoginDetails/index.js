import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { loginDetails } from '../../Actions';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginDetails.css';
import LogoLocation from '../LogoLocation';
import LoginInput from '../../Containers/LoginInput/';
import {connect} from 'react-redux';
import {LoginAction} from '../../Actions/LoginAction';
import {bindActionCreators} from 'redux';
import axios from 'axios';


class LoginDetails extends React.Component {

  getInput = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    //console.log('now i get the email value is : '+ email);
    const password = e.target.password.value;
    //console.log('now i get the password value is : '+ password);
    this.props.LoginAction(email,password);

  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="screen-logindetails-style">
        <div className="logo-logindetails-position">
          <LogoLocation/>
        </div>
        <div>
          <LoginInput getInput={this.getInput.bind(this)}/>
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

  function mapStateToProps(state){
     return {
       LoginState: state.Login,
     }
  }

  function matchDispatchToProps(dispatch){
    return bindActionCreators({LoginAction: LoginAction}, dispatch);
  }


  const LoginDetailsWrapper = createForm()(connect (null, null )(LoginDetails));

  export default LoginDetailsWrapper;



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
