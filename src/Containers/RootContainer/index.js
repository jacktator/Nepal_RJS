
import React, {Component} from 'react';
import Root from '../../Components/Root/';
import {connect} from 'react-redux';
import {checkLogin} from './action';
import {bindActionCreators} from 'redux';
type Props={

}

class RootContainer extends Component<Props>{
  render(){
    const {check, justRegistered} = this.props.RootStates;
    const isInvalidToken = this.props.isInvalidToken;
    return(
      <div>
        <Root
          justRegistered = {justRegistered}
          isInvalidToken = {isInvalidToken}

        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    RootStates: state.RootStates,
    isInvalidToken: state.LoginDetailsStates.isInvalidToken,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      checkLogin: checkLogin,

    }, dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(RootContainer);
