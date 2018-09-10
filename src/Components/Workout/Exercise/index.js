import React, {Component} from 'react';
import {NavBar, Icon, NoticeBar,WingBlank,Progress,Tag,Grid,Badge} from 'antd-mobile';
import './Exercise.css';
import RecordList from './RecordList.js';
import WeightandRep from './WeightAndRep';
import './RoundPopup.css';

const Exercise = (props) => {
  let message = "Of we go";
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

         {/* prescription is the black circle on top of image*/}
          <div className="prescription-circle">

                {/*
                <div className="prescription">
                <button className="btn-two">
                  <div>{props.exerciseData.sets}x</div>
                  <div>{props.exerciseData.reps} reps</div>
                  <div>{props.exerciseData.weight} kg</div>
                </button>
                </div> */}
         </div>
         <div className="image-block">
           {/* prescription circle*/}
           <div className="prescription-circle">
             <nav className="menu">
               <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
               <label className="menu-open-button" htmlFor="menu-open">
                 <span className="lines line-1"></span>
                 <span className="lines line-2"></span>
                 <span className="lines line-3"></span>
               </label>
               <a className="menu-item item-4">{props.state.exerciseData.sets}x</a>
               <a className="menu-item item-5">{props.state.exerciseData.reps}</a>
               <a className="menu-item item-6">{props.state.exerciseData.weight} kg</a>
             </nav>
           </div>

           {/* the main gif/image area */}
           <img src={require("../../../Assets/Exercise/exerciseGif.gif")} className="exercise-image" alt="exercise"/>
           {/* history button */}
           <img src={require("../../../Assets/Exercise/history.svg")} className="_history-icon" alt="history"
           onClick={(e) => props.onHistoryButtonHandler(e)}/>
           {/* exercise information*/}
           <img src={require("../../../Assets/Exercise/exerciseInfo.svg")} className="info-icon" alt="info"
             onClick={(e) => props.onInfoClicked(e) }/>
         </div>

         {/* displays the text and steppers, as well as the save button. refer to WeightandRep.js*/}
         <div className="stepper-list-container">
            <div>
              <WeightandRep
              code={props.state.exerciseData.code}
              state={props.state}
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
               {message}
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
