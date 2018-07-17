import React from 'react';
import {WingBlank, WhiteSpace, Button} from 'antd-mobile';
import './Workout.css';

const Workout = (props) => {
  return(
    <div className="container">
      <div className="container-without-button">
        <div className= "image-container">
          <img className="image-source" src={require('../../../Assets/Workout/immediate-fat-loss.jpg')} alt="immediate fat loss"/>
          <div className="workout-info">Immediate Fat Loss Workout</div>
        </div>
        <WingBlank>

          <div> <strong> Warm up</strong> </div>
          <WhiteSpace size="lg"/>

          {props.warmUpArray.map((data,key) => (
            <div className="list-workout">
              <span style = {{float: 'left', margin: "0 20px 0 0"}}>
                <img src="https://st3.depositphotos.com/5934840/14582/v/450/depositphotos_145822263-stock-illustration-man-running-icon.jpg" height="60px" width="100px" alt="work" />
              </span>
              {!data.isSaved && (
                <span style = {{ float :'right'}}>
                  <span className="span-button keep" onClick={() => props.onWarmUpKeep(data.value)}> keep </span>
                  <WhiteSpace size="xs"/>
                  <span className="span-button change" onClick={() => props.onChange()}> change </span>
                </span>
              )}
              {data.isSaved && (
                <span style = {{ float :'right'}}>
                  <span className="span-button saved"> saved! </span>
                </span>
              )}
              <span>
                {data.name}
                <WhiteSpace />
                40
              </span>
            </div>
          ))}

          <div style={{clear: 'both'}}> <strong> Workout </strong> </div>
          <WhiteSpace size="lg"/>

          { props.workOutArray.map((data, key) => (
            <div className="list-workout">
              <span style = {{float: 'left', margin: "0 20px 0 0"}}>
                <img src="https://st3.depositphotos.com/5934840/14582/v/450/depositphotos_145822263-stock-illustration-man-running-icon.jpg" height="60px" width="100px" alt="work" />
              </span>
              {!data.isSaved && (
                <span style = {{ float :'right'}}>
                  <span className="span-button keep" onClick={() => props.onWorkOutKeep(data.value)}> keep </span>
                  <WhiteSpace size="xs"/>
                  <span className="span-button change" onClick={() => props.onChange()}> change </span>
                </span>
              )}
              {data.isSaved && (
                <span style = {{ float :'right'}}>
                  <span className="span-button saved"> saved! </span>
                </span>
              )}
              <span>
                Knee Warm up
                <WhiteSpace />
                40
              </span>
            </div>
          ))}

          </WingBlank>
          </div>
        <div className="footer-botton">
          <Button type="primary" onClick={() => props.onStart()}>
              Start your workout
          </Button>
        </div>
    </div>//container

  )
}


export default Workout;
