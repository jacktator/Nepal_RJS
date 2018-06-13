import React, {Component} from 'react';
import LoginDetailsWrapper from '../../Components/LoginDetails/';
import {connect} from 'react-redux';
import {LoginDetailsActions} from './action';
import {bindActionCreators} from 'redux';


class LoginDetailsContainer extends Component{
  constructor(props){
    super(props);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e){
    console.log(e.target.value)
  }


  render(){
    return(
      <div>
        <LoginDetailsWrapper
          value={this.props.LoginDetailsStates}
          pressButton={this.props.LoginDetailsActions}
          onChange={this.}


        />
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
