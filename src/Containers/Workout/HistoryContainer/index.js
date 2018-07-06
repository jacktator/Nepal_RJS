import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import FooterContainer from'../FooterContainer';
import HistoryComponent from '../../../Components/Workout/History';

class PlanContainer extends Component{
  componentWillMount(){
    if(this.props.currentFooterTab!== 'historyTab' ){
      this.props.selectFooter('historyTab');
    }
  }
  render() {
    return (
      <div>
      <HistoryComponent/>
      <FooterContainer/>
      </div>
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
