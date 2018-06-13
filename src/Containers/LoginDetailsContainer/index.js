// @flow
import React, {Component} from 'react';
import LoginDetailsWrapper from '../../Components/LoginDetails/';
import {connect} from 'react-redux';
import {LoginDetailsActions, addEmail, addPassword} from './action';
import {bindActionCreators} from 'redux';


type Props = {
  onChange: Function,
  LoginDetailsActions:Function,
  LoginDetailsStates: Object,
  addEmail: Function,
  addPassword: Function,
}

type State ={
  email: string,
  password: number,
}


class LoginDetailsContainer extends Component<Props, State>{
  pageChange=(e)=>{
    
    console.log('this function has been called')
  }

  render(){
    const {email, password} = this.props.LoginDetailsStates

    return(
      <div>
        <LoginDetailsWrapper
          email={this.props.LoginDetailsStates.email}
          password={this.props.LoginDetailsStates.password}
          onChangeEmail={this.props.addEmail}
          onChangePassword={this.props.addPassword}
          onClickButton={this.props.LoginDetailsActions}
          pageChange={this.pageChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     LoginDetailsStates: state.LoginDetailsStates,
   }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      LoginDetailsActions: LoginDetailsActions,
      addEmail: addEmail,
      addPassword: addPassword,
    }, dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginDetailsContainer);
