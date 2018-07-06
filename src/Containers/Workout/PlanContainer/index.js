import React, { Component } from 'react';
import FooterContainer from'../FooterContainer';
import Plan from '../../../Components/Workout/Plan';

export default class PlanContainer extends Component{

  render() {
    return (
      <div>
      <Plan/>
      <FooterContainer/>
      </div>
    )
  }
}
