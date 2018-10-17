import React, {Component} from 'react';
import RehabExercise from '../../../Components/Rehab/RehabExercise';

class RehabExerciseContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <RehabExercise/>
      </div>
    )
  }
}

export default RehabExerciseContainer;
