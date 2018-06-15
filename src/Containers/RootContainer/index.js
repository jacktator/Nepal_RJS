
import React, {Component} from 'react';
import Root from '../../Components/Root/';
import {connect} from 'react-redux';
import {checkLogin} from './action';
import {bindActionCreators} from 'redux';
type Props={

}

class RootContainer extends Component<Props>{
  render(){
    const {check} = this.props.RootStates
    return(
      <div>
        <Root
          check={check}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    RootStates: state.RootStates,
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
