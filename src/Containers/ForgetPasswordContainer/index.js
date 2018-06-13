import React, {Component} from 'react';
import ForgetPasswordWrapper from '../../Components/ForgetPassWord/';
import {connect} from 'react-redux';
import {ForgetPasswordActions} from './action';
import {bindActionCreators} from 'redux';


class ForgetPasswordContainer extends Component{
  render(){
    return(
      <div>
        <ForgetPasswordWrapper value={this.props.ForgetPassWordStates}/>
      </div>
    );
  }
}

function mapStateToProps(state){
   return {
     ForgetPasswordStates: state.LoginDetailsStates,
   }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ForgetPasswordActions: ForgetPasswordActions}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ForgetPasswordContainer);
