import React, {Component} from 'react';
import {NavBar, Icon ,WhiteSpace,Flex,NoticeBar,WingBlank,Progress} from 'antd-mobile';
import './Exercise.css';
import RecordList from './RecordList.js';
//import VideoDetail from './VideoDetail.js';
import WeightAndRep from './WeightAndRep.js';


// icons taken from http://iconfont.cn/
import history from '../../../Assets/Exercise/history.svg';
//import historySel from '../../../Assets/Exercise/historySel.svg';
import exerciseInfo from '../../../Assets/Exercise/exerciseInfo.svg'

export default class Exercise extends Component{

  onLeftClick(e){
    e.preventDefault();
    alert(e)
  }

  render(){
    return(
      <div className="exercise">
        <div>
          {/* prescription is the black circle on top of image*/}
          <div className="prescription-circle">
                <div className="prescription">
                  <div>#sets</div>
                  <div>#reps</div>
                  <div>#kg</div>
                </div>
          </div>
          {/* history button */}
          <div className="history-icon"
          onClick={() => {alert("can see previous training longs of weights and reps they achieved. this goes to a seperate page.")}}>
          </div>
          {/* exercise information*/}
          <div className="info-icon"
            onClick={() => {alert("exercise information page. click this goes to video of exercise and description")}}/>
           {/* navigation bar on top of screen*/}
          <NavBar
            style={{backgroundColor:" #F5F5F9"}}
            mode='light'
            icon={<Icon type="left" size="lg"/>}
            onLeftClick={(e) => this.props.onBackButtonClicked(e)}
            className="nav-bar">
            <div className="nav-bar-text">
              Exercise #/#
            </div>
          </NavBar>
          {/* the main gif/image area */}
          <img src={require("../../../Assets/Exercise/exerciseGif.gif")} className="exercise-image"/>
        </div>
            {/* video part, commenting out as we may need it.
            <div className="exercise-iframe">
                <VideoDetail videos={this.props.videos}/>
            </div>
            */}
        {/* displays the text and steppers, as well as the save button. refer to WeightandRep.js*/}
        <WeightAndRep onSaveButtonClicked={this.props.onSaveButtonClicked}/>
        {/* displays the record list, refer to RecordList.js*/}
        <RecordList/>
        {/* Message for showing current goals*/}
        <NoticeBar
          marqueeProps={{ loop: true, fps:40, leading:1000, trailing:1000,style:{padding:'0 100px'}}}
          mode="closable"
          icon={null}
          className="display-message"
          >Good Job! you have done more reps this week!</NoticeBar>
          {/* progress bar of exercises completed for the day*/}
          <WingBlank><Progress
            position="normal"
            percent={0}
            /></WingBlank>
      </div>
    );
  }
}
