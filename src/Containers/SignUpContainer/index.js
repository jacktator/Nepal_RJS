import React, {Component} from 'react';
import SignUpWrapper from '../../Components/SignUp/';
import {connect} from 'react-redux';
import {SignUpActions} from './action';
import {bindActionCreators} from 'redux';


class SignUpContainer extends Component{
  render(){
    return(
      <div>
        <SignUpWrapper value={this.props.SignUpStates}/>
      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     SignUpStates: state.SignUpStates,
   }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({SignUpActions: SignUpActions}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginDetailsContainer);
