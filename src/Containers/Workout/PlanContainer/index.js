// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram} from '../actions';
import FooterContainer from'../FooterContainer';
import Plan from '../../../Components/Workout/Plan';
import Hoc from '../../../HOC/Hoc';
import Loading from '../../../Components/Loading'

class PlanContainer extends Component{
  componentWillMount(){
    if(this.props.currentFooterTab!== 'planTab' ){
      this.props.selectFooter('planTab');
    }
    this.props.getProgram();
  }
  render() {
    if(this.props.WorkoutReducers.program) {
      return (
        <div>
          <Plan WorkoutReducers={this.props.WorkoutReducers}/>
          <FooterContainer currentPath='plan'/>
        </div>
      )
    } else {
      return(
        <Hoc>
        <Loading/>
        </Hoc>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    profileReducers: state.ProfileReducers,
    WorkoutReducers: state.WorkoutReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, getProgram
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps) (PlanContainer);
