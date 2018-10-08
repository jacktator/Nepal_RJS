
import React, {Component} from 'react';
import Root from '../../Components/Root/';
import {connect} from 'react-redux';
import {checkLogin} from './action';
import {bindActionCreators} from 'redux';
type Props={

}

class RootContainer extends Component<Props>{
  render(){
    console.log("This is from root state",this.props.RootStates);
    const {check, justRegistered} = this.props.RootStates;
    const isAuthenticated = this.props.isAuthenticated;
    return(
      <div>
        <Root
          justRegistered = {justRegistered}
          isAuthenticated = {isAuthenticated}

        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    RootStates: state.RootStates,
    isAuthenticated: state.LoginDetailsStates.isAuthenticated,
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
