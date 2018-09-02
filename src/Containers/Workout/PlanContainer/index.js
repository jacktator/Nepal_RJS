// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram} from '../actions';
import FooterContainer from'../FooterContainer';
import Plan from '../../../Components/Workout/Plan';

class PlanContainer extends Component{
  componentWillMount(){
    if(this.props.currentFooterTab!== 'planTab' ){
      this.props.selectFooter('planTab');
    }
    this.props.getProgram();

    if(this.props.WorkoutReducers.program){
      const {days, progress} = this.props.WorkoutReducers.program;
      const currentWeek = Math.ceil(progress / days);
      const currentDay = progress - ((currentWeek -1 ) * days)
      alert (currentDay);
      alert(currentWeek);
    }
  }
  render() {
    console.log(this.props.WorkoutReducers);
    return (
      <div>
        <Plan WorkoutReducers={this.props.WorkoutReducers}/>
        <FooterContainer currentPath='plan'/>
      </div>
    )
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
