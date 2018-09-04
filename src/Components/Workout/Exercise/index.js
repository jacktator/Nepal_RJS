import React, {Component} from 'react';
import {NavBar, Icon, NoticeBar,WingBlank,Progress,Tag,Grid,Badge} from 'antd-mobile';
import './Exercise.css';
import RecordList from './RecordList.js';
import WeightandRep from './WeightAndRep';


// icons taken from http://iconfont.cn/
// import history from '../../../Assets/Exercise/history.svg';
//import historySel from '../../../Assets/Exercise/historySel.svg';
// import exerciseInfo from '../../../Assets/Exercise/exerciseInfo.svg'

export default class Exercise extends Component{
  constructor(props) {
    super(props);
    this.state = {
      weight: 10,
      reps:5,
      sets: 1,
      exerciseLog:[],
    };
    this.onChangeWeight=this.onChangeWeight.bind(this);
    this.onChangeRep = this.onChangeRep.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  componentDidMount () {
    this.setState({ weight: this.props.exerciseData.weight, sets: this.props.exerciseData.sets, reps: this.props.reps})
  }

  onChangeWeight = (val) => {
    this.setState({ weight: val });
  }

  onChangeRep = (val) => {
    this.setState({ reps: val });
  }

  onSaveButtonClick = () => {
    if (this.state.exerciseLog.length < this.state.sets) {
      let newExerciseLog = this.state.exerciseLog;
      // newExerciseLog.push(this.state.exerciseLog);
      newExerciseLog.push({weight:this.state.weight, reps:this.state.reps});
      this.setState({ exerciseLog: newExerciseLog });  
    }
  }

  onLeftClick(e){
    e.preventDefault();
    alert(e)
  }
  render(){
    return(
      <div className="exercise">
          {/* navigation bar on top of screen*/}
         <NavBar
           style={{backgroundColor:"white"}}
           mode='light'
           icon={<Icon type="left" size="lg"/>}
           onLeftClick={(e) => this.props.onBackButtonClicked(e)}
           className="nav-bar"
           style={{marginTop:"20px"}}>
           <div className="nav-bar-text">
            {this.props.exerciseData.workout} {this.props.exerciseNumber}/{this.props.exerciseTotal}
           </div>
         </NavBar>
         {/* prescription is the black circle on top of image*/}
          <div className="prescription-circle">
                <div className="prescription">
                <button className="btn-two">
                  <div>{this.props.exerciseData.sets}x</div>
                  <div>{this.props.exerciseData.reps} reps</div>
                  <div>{this.props.exerciseData.weight} kg</div>
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
             onClick={(e) => this.props.onInfoClicked(e) }/>
           </div>
         </div>

         {/* displays the text and steppers, as well as the save button. refer to WeightandRep.js*/}
         <div className="stepper-list-container">
            <div>
              <WeightandRep
              exerciseData={this.props.exerciseData}
              weight={this.state.weight}
              sets={this.state.sets}
              reps={this.state.reps}
              onSaveButtonClicked={this.onSaveButtonClick}
              onChangeWeight={this.onChangeWeight}
              onChangeRep={this.onChangeRep}
              steps={this.state.sets-this.state.exerciseLog.length}
            />
            </div>
            {/* displays the record list, refer to RecordList.js*/}
           <div>
             <RecordList
              exerciseLog={this.state.exerciseLog}
              weight = {this.state.weight}
              sets = {this.state.sets}
              reps = {this.state.reps}
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
}

{/* <WeightandRep
                exerciseData = {this.props.exerciseData}
                weight = {this.props.exerciseData.weight}
                sets = {this.props.exerciseData.sets}
                reps = {this.props.reps}
                onSaveButtonClicked={this.props.onSaveButtonClicked}
            /> */}