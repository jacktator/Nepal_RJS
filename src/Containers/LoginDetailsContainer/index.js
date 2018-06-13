import React, {Component} from 'react';
import LoginDetailsWrapper from '../../Components/LoginDetails/';
import {connect} from 'react-redux';
import {LoginDetailsActions} from './action';
import {bindActionCreators} from 'redux';


class LoginDetailsContainer extends Component{
  render(){
    return(
      <div>
        <LoginDetailsWrapper value={this.props.LoginDetailsStates}/>
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
  return bindActionCreators({LoginDetailsActions: LoginDetailsActions}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginDetailsContainer);
