// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getHistory} from './action';
import FooterContainer from'../FooterContainer';
import Header from '../../../Components/Workout/History/Header'
import HistoryWeekly from '../../../Components/Workout/History/HistoryWeekly';
import HistoryComponent from '../../../Components/Workout/History';
import Hoc from '../../../HOC/Hoc';

class HistoryContainer extends Component{
  constructor(props){
    super(props);
    // console.log(this.props.match.path.substring(1))
    this.state = {

      daySelect: 1,
      weekSelect: 1,
      currentPage: 1,
      loading:true,
    }
  }
  componentWillMount(){

    if(this.props.currentFooterTab!== 'historyTab' ){
      this.props.selectFooter('historyTab');
    }

  }
  componentDidMount(){

    this.props.getHistory().then(()=>{
      this.setState({
        loading:false
      })
    });

  }

  onListProgramClickHandler = (e) => {

      e.preventDefault();
      // let currentHistoryIndex = this.state.history.findIndex( data =>{ return data.program === program});
      this.setState({
        currentPage: this.state.currentPage+1,
      })
  }
  onParticularWeekClickedHandler = (e, week) => {
    this.setState({
      weekSelect: e,
      week:this.state.weekSelect+1
    })
    console.log("week",week)
    console.log('week',e);
  }
  onParticularDayClickedHandler =(e,day) => {
    // e.preventDefault();
    this.setState({
      currentPage: this.state.currentPage + 1,
      day: this.state.daySelect+1,
      daySelect:e
    })
    console.log("day",day)
    // console.log('day',e)
  }

  render() {
    console.log("history reducer", this.props.HistoryReducers);
    return(
      <div>History</div>
    )
    // let RenderPage = null;
    // console.log('THIS IS FORM history',this.props.HistoryReducers)
    // let {program,record} = this.props.HistoryReducers;
    // let {progress,days} = program;
    //
    // let currentlyWeek = currentWeek(progress,days);
    //
    // if(this.state.currentPage === 1){
    //   RenderPage = (
    //     <HistoryComponent
    //       onListProgramClick={this.onListProgramClickHandler}
    //       data= {this.props.HistoryReducers}
    //       record={record}
    //       loading={this.state.loading}
    //     />
    //   )
    // }
    // if(this.state.currentPage === 2){
    //   RenderPage = (
    //     <HistoryWeekly
    //       currentPage={currentlyWeek-1}
    //       data={program}
    //       onParticularWeekClickedHandler={this.onParticularWeekClickedHandler}
    //       onParticularDayClicked={this.onParticularDayClickedHandler}
    //       daily_record={record.daily_record}
    //     />
    //   )
    // }
    // // if(this.state.currentPage === 3){
    // //   RenderPage = (
    // //     <HistoryDetail daily_record={record.daily_record}/>
    // //   )
    // // }
    //
    // return (
    //   <Hoc>
    //     <Header/>
    //     {RenderPage}
    //     <FooterContainer currentPath='history'/>
    //   </Hoc>
    // )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    HistoryReducers: state.HistoryReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter,
    getHistory,
  }, dispatch
);
}

const currentWeek = (progress, days) => (Math.ceil(progress / days));

export default connect(mapStateToProps, matchDispatchToProps)(HistoryContainer)
