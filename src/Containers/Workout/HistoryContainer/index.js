import React, { Component } from 'react';
import FooterContainer from'../FooterContainer';
import HistoryComponent from '../../../Components/Workout/History';

export default class PlanContainer extends Component{

  render() {
    return (
      <div>
      <HistoryComponent/>
      <FooterContainer/>
      </div>
    )
  }
}
