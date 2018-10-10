import React, {Component} from 'react';
import SignUpWrapper from '../../Components/SignUp/';
import {connect} from 'react-redux';
import {SignUpActions, addUsername, addEmail, addPassword,removeError} from './action';
import {bindActionCreators} from 'redux';
import Modal from '../../Components/UI/Modal';
import ShowError from '../../Components/Error/ShowError';
import {Redirect} from 'react-router-dom';

class SignUpContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      isInvalidEmail: false,
      loading:false,
      click:false
    }
  }

  onAbleChange =()=>{
    const{email, password} = this.props.SignUpStates;
    if(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(email)) {
       this.props.SignUpActions(email, password)
       this.setState({
        loading:true,
        click:true
       })
    }else{
      this.setState({
        isInvalidEmail: true,
      })
    }
  }

  cancelInvalidEmailHandler = () => {
    this.setState({ isInvalidEmail:false ,loading:false, click:false})
  }
  cancelErrorMessageHandler =()=>{
    this.props.removeError();
    this.setState({loading:false, click:false})
  }

  render(){
    const {error} = this.props.SignUpStates
    return(
      <div>
        <SignUpWrapper
          justRegistered={this.props.justRegistered}
          SignUpStates={this.props.SignUpStates}
          onChangeEmail={this.props.addEmail}
          onChangePassword={this.props.addPassword}
          history={this.props.history}
          onAbleChange = {this.onAbleChange}
          state = {this.state}
        />
        {this.props.justRegistered && <Redirect to="/questionnaire" />}
        {(this.state.isInvalidEmail === true) && (
          <Modal modalFor = "modal">
            <ShowError
              error= {"Please enter the valid email address"}
              cancel = {this.cancelInvalidEmailHandler}
            />
          </Modal>
        )}
        {(error.hasError) && (
          <Modal modalFor="modal">
            <ShowError
            error={error.message}
            cancel = {this.cancelErrorMessageHandler}
            />
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
