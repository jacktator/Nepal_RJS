import React from 'react'
import {WingBlank,Progress,WhiteSpace} from 'antd-mobile'
import './Plan.css'
import StickyTab from './StickyTab'
import Difficulty from './Difficulty'

const Plan = (props) => {
  if(props.WorkoutReducers.program){
      const currentlyPercentage = progressPercentage(props.WorkoutReducers.program.progress, props.WorkoutReducers.program.days);
      const currentlyWeek = currentWeek(props.WorkoutReducers.program.progress, props.WorkoutReducers.program.days);
    return (
      <div>
        <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="plan-sample-image"/>
        <div className="plan-title">
          {props.WorkoutReducers.program.program_name}
          <div className="plan-program-small-text">
            <div>You are currently at Week {currentlyWeek} </div>
            <WhiteSpace/>
            <div>{currentlyPercentage}% Completed </div>
          </div>
        </div>
        <div className="plan-progress-container">
          <WingBlank>
              <Progress position="normal" percent={currentlyPercentage} showInfo={false}/>
          </WingBlank>
        </div>
        <div className="sticky-tab">
          <StickyTab currentpage={currentlyWeek-1} WorkoutReducers={props.WorkoutReducers}/>
        </div>
        <div>
          <Difficulty />
        </div>
      </div>
    )
  }
}

const progressPercentage = (progress, days) => Math.round((progress - 1) / (days * 5) * 100);
const currentWeek = (progress, days) => (Math.ceil(progress / days));
// const currentday = (progress, week, days) => (progress - (week -1) * days);
export default Plan;
