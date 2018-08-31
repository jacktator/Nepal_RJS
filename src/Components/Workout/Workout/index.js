import React from 'react';
import {WingBlank, WhiteSpace, Button} from 'antd-mobile';
import './Workout.css';

const Workout = (props) => {
  return(
    <div className="container">
      <div className="container-without-button">
        <div className= "image-container">
          <img className="image-source" src={require('../../../Assets/Workout/immediate-fat-loss.jpg')} alt="immediate fat loss"/>
          <div className="workout-info">{props.program.program_name}</div>
        </div>
        <WingBlank>
          <div> <strong> Work Out </strong> </div>
          <WhiteSpace size="lg"/>

          {props.program.exercises[0].exercise_list.map((data,key) => (
            <div key={key} className="list-workout">
              <span style = {{float: 'left', margin: "0 20px 0 0"}}>
                <img src={require(`../../../Assets/WorkoutIcons/${key}.jpg`)} height="60px" width="100px" alt="work" />
              </span>
              {!data.is_saved && (
                <span style = {{ float :'right'}}>
                  <span className="span-button keep" onClick={() => props.onWorkOutKeep(key)}> keep </span>
                  <WhiteSpace size="xs"/>
                  <span className="span-button change" onClick={() => props.onExerciseChange(key)}> change </span>
                </span>
              )}
              {data.is_saved && (
                <span style = {{ float :'right'}}>
                  <span className="span-button saved"> saved! </span>
                </span>
              )}
              <span>
                {data.workout}
                <WhiteSpace />
                {data.code}
              </span>
            </div>
          ))}

          <WhiteSpace size="lg"/>

          </WingBlank>
          </div>
        <div className="footer-botton">
        <WingBlank>
          <WingBlank>
            <Button type="primary" onClick={() => props.onStart()}>
                Start your Workout
            </Button>
          </WingBlank>
        </WingBlank>
        </div>
    </div>//container
  )
}

export default Workout;
