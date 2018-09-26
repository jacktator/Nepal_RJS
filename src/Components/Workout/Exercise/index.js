import React from 'react';
import {NavBar, Icon, NoticeBar,WingBlank,Progress, Badge} from 'antd-mobile';
import './Exercise.css';
import RecordList from './RecordList.js';
import WeightandRep from './WeightAndRep';
import './RoundPopup.css';

const Exercise = (props) => {
    return(
      <div className="exercise">
          {/* navigation bar on top of screen*/}
        <NavBar
           style={{backgroundColor:"white"}}
           mode='light'
           icon={<Icon type="left" size="lg"/>}
           onLeftClick={(e) => props.onBackButtonClicked(e)}
           className="nav-bar">
           <div className="nav-bar-text">
            {props.state.exerciseData.workout} {props.state.exerciseIndex+ 1}/{props.state.exerciseLength}
           </div>
        </NavBar>
        <div className="image-block">
            {/* circle bar on top right of screen*/}
            <div className="prescription-circle">
            <Badge text={<div style={{ flexDirection: 'column', display: 'flex', justifyContent:'center', height: '50px', width: '40px', marginTop: '-25px'}}><span style={{height:'13px', marginTop:'-3px'}}>{props.state.exerciseData.sets} sets</span><span style={{height:'13px'}}>{props.state.exerciseData.reps}</span><span style={{height:'13px'}}>{props.state.exerciseData.weight}kg</span></div>} style={{  height:'50px', width:'40px', backgroundColor: '#f19736', borderRadius: '50%' }} />
           </div>
           {/* the main gif/image area */}
           <img src={require("../../../Assets/Workout/Exercise/exerciseGif.gif")} className="exercise-image" alt="exercise"/>
           {/* history button */}
           <img src={require("../../../Assets/Workout/Exercise/history.svg")} className="_history-icon" alt="history"
           onClick={(e) => props.onHistoryButtonHandler(e)}/>
           {/* exercise information*/}
           <img src={require("../../../Assets/Workout/Exercise/exerciseInfo.svg")} className="info-icon" alt="info"
             onClick={(e) => props.onInfoClicked(e) }/>
         </div>
         {/* displays the text and steppers, as well as the save button. refer to WeightandRep.js*/}
         <div className="stepper-list-container">
            <div>
              <WeightandRep
              state={props.state}
              exercisePlace={props.exercisePlace}
              onCompleteButtonHandler={props.onCompleteButtonHandler}
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
              state = {props.state}
            />
             {/* Message for showing current goals*/}
             { props.message != null &&
               <NoticeBar
                 marqueeProps={{ loop: true, fps:40, leading:1000, trailing:1000,style:{padding:'0 100px'}}}
                 mode=''
                 icon={null}
                 className="display-message"
               >
                 {props.message}
               </NoticeBar>
             }
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
