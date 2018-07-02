import React from 'react';
import './Workout.css';

const Workout = (props) => {
  return(
    <div>
      <div className= "image-container">
        <img className="image-source" src={require('../../../Assets/Workout/immediate-fat-loss.jpg')} alt="immediate fat loss"/>
        <div className="workout-info">Immediate fat loss Workout</div>
      </div>
    </div>
  )
}

export default Workout;
