// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram} from './actions';
import FooterContainer from'../FooterContainer';
import Plan from '../../../Components/Workout/Plan';
class PlanContainer extends Component{

  componentWillMount(){
    if(this.props.currentFooterTab!== 'planTab' ){
      this.props.selectFooter('planTab');
    }
    this.props.getProgram();
  }
  render() {
    console.log("plan reducer from container",this.props.planReducers)
    return (
      <div>
        <Plan planReducers={this.props.planReducers}/>
        <FooterContainer/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    profileReducers: state.ProfileReducers,
    planReducers: state.PlanReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, getProgram
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps) (PlanContainer);
