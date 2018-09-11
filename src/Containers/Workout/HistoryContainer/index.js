// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import FooterContainer from'../FooterContainer';

import HistoryWeekly from '../../../Components/Workout/History/HistoryWeekly';
import HistoryDetail from '../../../Components/Workout/History/HistoryDetail';
import HistoryComponent from '../../../Components/Workout/History';
import Hoc from '../../../HOC/Hoc';

class PlanContainer extends Component{
  constructor(props){
    super(props);
    // console.log(this.props.match.path.substring(1))
    this.state = {
      // history: [
      //   {program:'push up', date:'2018/05/15', day:{one:{task: 'task' }, two: { task: 'task'} } },
      //   {program:'pull up', date:'2018/05/15', day:{one:{task: 'task' }, two: { task: 'task'} } },
      //   {program:'chin up', date:'2018/05/15', day:{one:{task: 'task' }, two: { task: 'task'} } },
      // ],
      currentPage: 1,
    }
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'historyTab' ){
      this.props.selectFooter('historyTab');
    }
  }
  onListProgramClickHandler = (e, program) => {
    e.preventDefault();
    // let currentHistoryIndex = this.state.history.findIndex( data =>{ return data.program === program});
    this.setState({ currentPage: this.state.currentPage+1})
  }
onParticularDayClickedHandler =(e, program ) => {
  e.preventDefault();
  this.setState({ currentPage: this.state.currentPage+1})
}

  render() {
    let RenderPage = null;
    console.log("this is from history",this.props.WorkoutReducers)

    let {record,program} = this.props.WorkoutReducers;

    let totalDays = parseInt(program.days);
    let currentWeek = this.props.WorkoutReducers.currentWeek;
    let currentDay = this.props.WorkoutReducers.currentDay;

    let weekIndex = (record.weekly_record.findIndex(i => 
      {return i.week === currentWeek.toString()}))
    let weekNum = (record.weekly_record[weekIndex].week);//string

    let dayIndex = (record.weekly_record[weekIndex].daily_record.findIndex(j => 
      {return j.day === currentDay.toString()}))
    let exerciseData = (record.weekly_record[weekIndex].daily_record[dayIndex].data)

    const currentlyWeek = Week(program.progress,program.days)

    if(this.state.currentPage === 1){
      RenderPage = (
        <HistoryComponent
          onListProgramClick={this.onListProgramClickHandler}
          WorkoutReducers= {this.props.WorkoutReducers}
        />
      )
    }
    if(this.state.currentPage === 2){
      RenderPage = (
        <HistoryWeekly 
          onParticularDayClicked={this.onParticularDayClickedHandler}
          weekNum={weekNum}
          currentpage = {currentlyWeek-1}
          record ={record}
          WorkoutReducers={this.props.WorkoutReducers}
        />
      )
    }
    if(this.state.currentPage === 3){
      RenderPage = (
        <HistoryDetail 
          exerciseData={exerciseData}
         day={currentDay}
         totalDays={totalDays}/>
      )
    }

    return (
      <Hoc>
        {RenderPage}
        <div style={{margin:'auto'}}></div>
        <FooterContainer currentPath='history'/>
      </Hoc>
    )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    WorkoutReducers: state.WorkoutReducers
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter
  }, dispatch
);
}

const Week = (progress,days) => Math.ceil(progress /days);

export default connect(mapStateToProps, matchDispatchToProps)(PlanContainer)
