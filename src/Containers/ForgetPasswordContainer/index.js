// @flow
import React, {Component} from 'react';
import ForgetPasswordWrapper from '../../Components/ForgetPassWord/';
import {connect} from 'react-redux';
import {ForgetPasswordActions, addEmail} from './action';
import {bindActionCreators} from 'redux';


class ForgetPasswordContainer extends Component{
  render(){
    return(
      <div>
        <ForgetPasswordWrapper
          email={this.props.ForgetPasswordStates.email}
          onChangeInput={this.props.addEmail}
          onClickButton={this.props.ForgetPasswordActions}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     ForgetPasswordStates: state.ForgetPasswordStates,
   }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    ForgetPasswordActions: ForgetPasswordActions,
    addEmail: addEmail,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ForgetPasswordContainer);
