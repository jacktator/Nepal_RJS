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
  }
  onListProgramClickHandler = (e, program) => {
    e.preventDefault();
    let currentHistoryIndex = this.state.history.findIndex( data =>
        { return data.program === program});
    this.setState({ currentPage: this.state.currentPage+1})
  }
onParticularDayClickedHandler =(e, program ) => {
  e.preventDefault();
  this.setState({ currentPage: this.state.currentPage+1})
}

  render() {
    let RenderPage = null;

    if(this.state.currentPage === 1){
      RenderPage = (
        <HistoryComponent
          onListProgramClick={this.onListProgramClickHandler}
          data= { this.state.history }
        />
      )
    }
    if(this.state.currentPage === 2){
      RenderPage = (
        <HistoryWeekly onParticularDayClicked={this.onParticularDayClickedHandler}
        />
      )
    }
    if(this.state.currentPage === 3){
      RenderPage = (
        <HistoryDetail />
      )
    }

    return (
      <Hoc>
        {RenderPage}
        <FooterContainer/>
      </Hoc>
    )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps)(PlanContainer)
