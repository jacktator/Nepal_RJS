import React, {Component} from 'react';
import SignUpWrapper from '../../Components/SignUp/';
import {connect} from 'react-redux';
import {SignUpActions, addUsername, addEmail, addPassword,removeError} from './action';
import {bindActionCreators} from 'redux';
import Modal from '../../Components/UI/Modal';
import ShowError from '../../Components/Error/ShowError';

class SignUpContainer extends Component{
  cancelErrorMessageHandler =()=>{
    this.props.removeError();
  }
  render(){
    console.log("signupConatiner");
    const {error,hasError,message}= this.props.SignUpStates;
    console.log(error)
    return(
      <div>
        <SignUpWrapper
          justRegistered={this.props.justRegistered}
          state={this.props.SignUpStates}
          onClickButton={this.props.SignUpActions}
          onChangeEmail={this.props.addEmail}
          onChangePassword={this.props.addPassword}
          onChangeUsername={this.props.addUsername}
          history={this.props.history}
        />
        {(hasError) && (
          <Modal modalFor='modal'>
              <ShowError 
                error={message}
                cancel={this.cancelErrorMessageHandler}/>
          </Modal>
        )}
      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     SignUpStates: state.SignUpReducersStates,
     justRegistered: state.RootStates.justRegistered
   }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    SignUpActions: SignUpActions,
    addUsername: addUsername,
    addEmail: addEmail,
    addPassword: addPassword,
    removeError
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpContainer);
