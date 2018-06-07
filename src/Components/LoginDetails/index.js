import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { loginDetails } from '../../Actions';
import { List, InputItem, WhiteSpace, WingBlank,Button, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import './LoginDetails.css';
import LogoLocation from '../LogoLocation';
import LoginInput from '../../Containers/LoginInput/';
//================================================================================
import {connect} from 'react-redux';
import {LoginAction} from '../../Actions/LoginAction';
import {bindActionCreators} from 'redux';
import axios from 'axios';



class ComponentLoginInput extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      name: '',
    }
  }

  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.customFocusInst.focus();
  }

  //Handle the input of the field to the state
  inputHandler = (key, val) => {
    let login = { ...this.state.login};
    login[key] = val;
    this.setState({login});
  }

  //Handle the click event for login button
  loginClickHandler = () => {
    this.props.loginDetails(this.state.login);
  }
//==============================================================================
//this function is for input values(onChange())
  handleChange=(inputValue)=>{

    this.setState({name: inputValue})
    console.log(this.state.name)
  }

  submitInfo=(e)=>{
    e.preventDefault();
    console.log('this is working ')
  }

//this function is for submit value(onSubmit())
  getEmail = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);

    const password = e.target.password.value;
    console.log(password);

    // axios.get(`https://api.github.com/users/${email}`)
    // .then((res)=>{
    //   console.log(res);
    //   console.log(res.data);
    // })

    this.props.LoginAction(email, password);

  }

  infoSubmit=(e)=>{
    e.preventDefault();
    const user = {
      name: this.state.name,
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    .then((res)=>{
      console.log(res);
    })
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="screen-logindetails-style">
        <div className="logo-logindetails-position">
          <LogoLocation/>
        </div>
        <div>
        <LoginInput getEmail={this.getEmail} handleChange={this.handleChange}/>
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
  const ComponentLoginInputWrapper = createForm()(connect (null, { loginDetails } )(ComponentLoginInput));

  function mapStateToProps(state){
     return {
       LoginState: state.Login,
     }
  }

  function matchDispatchToProps(dispatch){
    return bindActionCreators({
      LoginAction: LoginAction
    }, dispatch);
  }



  export default connect(mapStateToProps, matchDispatchToProps)(ComponentLoginInputWrapper);
