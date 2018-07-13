import React, {Component} from 'react';
import {NavBar, Icon ,WhiteSpace,Flex} from 'antd-mobile';
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
          <WhiteSpace size="lg"/>
          {/* prescription is the black circle on top of image*/}
          <div className="prescription-circle">
            <div className="prescription">
            <div className="prescription-set">
              #sets
            </div>
            <div className="prescription-rep">
              #reps
            </div>
            <div className="prescription-weight">
              #kg
            </div>
            </div>
          </div>
          {/* history button */}
          <img
            src={history}
            className="history-icon"
            onClick={() => {alert("can see previous training longs of weights and reps they achieved. this goes to a seperate page.")}}/>
          {/* exercise information*/}
          <img
            src={exerciseInfo}
            className="info-icon"
            onClick={() => {alert("exercise information page. click this goes to video of exercise and description")}}/>

          <NavBar
            style={{backgroundColor:" #F5F5F9"}}
            mode='light'
            icon={<Icon type="left" size="lg"/>}
            onLeftClick={(e) => this.props.onBackButtonClicked(e)}>
            <div className="nav-bar-text">
              Exercise #/#
            </div>
          </NavBar>
          <WhiteSpace size="lg"/>
          <img src={require("../../../Assets/Workout/exerciseImage.jpg")} alt="exerciseImage" className="exercise-image"/>
        </div>
        <div className="exercise-iframe">
          {/*<VideoDetail videos={this.props.videos}/>*/}
        </div>
        <div>
          <WeightAndRep onSaveButtonClicked={this.props.onSaveButtonClicked}/>
        </div>
        <div className="exercise-recordlist">
          <RecordList/>
        </div>
      </div>
    );
  }
}
