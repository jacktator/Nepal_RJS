import React, {Component} from 'react';
import {NavBar, Icon, NoticeBar,WingBlank,Progress,Tag,Grid,Badge} from 'antd-mobile';
import './Exercise.css';
import RecordList from './RecordList.js';
import WeightandRep from './WeightAndRep';

const Exercise = (props) => {
    return(
      <div className="exercise">
          {/* navigation bar on top of screen*/}
         <NavBar
           style={{backgroundColor:"white"}}
           mode='light'
           icon={<Icon type="left" size="lg"/>}
           onLeftClick={(e) => props.onBackButtonClicked(e)}
           className="nav-bar"
           style={{marginTop:"20px"}}>
           <div className="nav-bar-text">
            {props.exerciseData.workout} {props.state.exerciseIndex+ 1}/{props.state.exerciseLength}
           </div>
         </NavBar>
         {/* prescription is the black circle on top of image*/}
          <div className="prescription-circle">
                <div className="prescription">
                <button className="btn-two">
                  <div>{props.exerciseData.sets}x</div>
                  <div>{props.exerciseData.reps} reps</div>
                  <div>{props.exerciseData.weight} kg</div>
                </button>
                </div>
         </div>
         <div className="image-block">
           {/* the main gif/image area */}
           <img src={require("../../../Assets/Exercise/exerciseGif.gif")} className="exercise-image" alt="exercise"/>
           <div className="image-container">
           {/* history button */}
           <img src={require("../../../Assets/Exercise/history.svg")} className="_history-icon" alt="history"
           onClick={() => {alert("can see previous training longs of weights and reps they achieved. this goes to a seperate page.")}}/>
           {/* exercise information*/}
           <img src={require("../../../Assets/Exercise/exerciseInfo.svg")} className="info-icon" alt="info"
             onClick={(e) => props.onInfoClicked(e) }/>
           </div>
         </div>

         {/* displays the text and steppers, as well as the save button. refer to WeightandRep.js*/}
         <div className="stepper-list-container">
            <div>
              <WeightandRep
              code={props.exerciseData.code}
              state={props.state}
              onSaveButtonClicked={props.onSaveButtonClicked}
              onNextButtonHandler = {props.onNextButtonHandler}
              onChangeWeight={props.onChangeWeight}
              onChangeRep={props.onChangeRep}
              steps={props.state.sets-props.state.exerciseLog.length}
            />
            </div>
            {/* displays the record list, refer to RecordList.js*/}
           <div>
             <RecordList
              exerciseLog={props.state.exerciseLog}
              state = {props.state}
            />
             {/* Message for showing current goals*/}
             <NoticeBar
               marqueeProps={{ loop: true, fps:40, leading:1000, trailing:1000,style:{padding:'0 100px'}}}
               mode="closable"
               icon={null}
               className="display-message"
             >
               Good Job! you have done more reps this week!
             </NoticeBar>
               {/* progress bar of exercises completed for the day*/}
             <WingBlank>
               <Progress position="normal" percent={0}/>
             </WingBlank>
           </div>
         </div>
      </div>
    );
  }

export default Exercise;

{/* <WeightandRep
                exerciseData = {props.exerciseData}
                weight = {props.exerciseData.weight}
                sets = {props.exerciseData.sets}
                reps = {props.reps}
                onSaveButtonClicked={props.onSaveButtonClicked}
            /> */}
