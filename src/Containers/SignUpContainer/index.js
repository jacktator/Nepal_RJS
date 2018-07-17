import React, {Component} from 'react';
import SignUpWrapper from '../../Components/SignUp/';
import {connect} from 'react-redux';
import {SignUpActions, addUsername, addEmail, addPassword } from './action';
import {bindActionCreators} from 'redux';

class SignUpContainer extends Component{

  render(){
    const {username, email, password, error}= this.props.SignUpStates;
    if(error){
      alert(error)
    }
    return(
      <div>
        <SignUpWrapper
          state={this.props.SignUpStates}
          onClickButton={this.props.SignUpActions}
          onChangeEmail={this.props.addEmail}
          onChangePassword={this.props.addPassword}
          onChangeUsername={this.props.addUsername}
          history={this.props.history}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     SignUpStates: state.SignUpReducersStates,
   }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    SignUpActions: SignUpActions,
    addUsername: addUsername,
    addEmail: addEmail,
    addPassword: addPassword,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpContainer);
