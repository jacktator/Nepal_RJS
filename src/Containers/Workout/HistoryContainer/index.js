// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram,getExerciseRecord,setDayIndex} from '../HistoryContainer/action';
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
      history: [
        {program:'push up', date:'2018/05/15', day:{one:{task: 'task' }, two: { task: 'task'} } },
        {program:'pull up', date:'2018/05/15', day:{one:{task: 'task' }, two: { task: 'task'} } },
        {program:'chin up', date:'2018/05/15', day:{one:{task: 'task' }, two: { task: 'task'} } },
      ],
      currentPage: 1,
    }
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'historyTab' ){
      this.props.selectFooter('historyTab');
    }
    this.props.getProgram();
  }
  componentDidMount(){
    if(this.props.HistoryReducers){
      this.props.getExerciseRecord();
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
    console.log("this is from history",this.props.HistoryReducers)


    // if(this.state.currentPage === 1){
    //   RenderPage = (
    //     <HistoryComponent
    //       onListProgramClick={this.onListProgramClickHandler}
         
    //     />
    //   )
    // }
    // if(this.state.currentPage === 2){
    //   RenderPage = (
    //     <HistoryWeekly 
    //       onParticularDayClicked={this.onParticularDayClickedHandler}
    //       weekNum={weekNum}
    //       currentpage = {currentlyWeek-1}
    //       record ={record}
    //       WorkoutReducers={this.props.WorkoutReducers}
    //     />
    //   )
    // }
    // if(this.state.currentPage === 3){
    //   RenderPage = (
    //     <HistoryDetail 
    //       exerciseData={exerciseData}
    //       day={currentDay}
    //       totalDays={totalDays}/>
    //   )
    // }

    return (
      <Hoc>
        {/* {RenderPage} */}
        <div style={{margin:'auto'}}></div>
        <FooterContainer currentPath='history'/>
      </Hoc>
    )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    HistoryReducers: state.HistoryReducers
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter,
    getProgram,
    getExerciseRecord,
  }, dispatch
);
}

const Week = (progress,days) => Math.ceil(progress /days);

export default connect(mapStateToProps, matchDispatchToProps)(PlanContainer)
