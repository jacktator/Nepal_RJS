import React from 'react';
import {List} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './RehabExercise.css'

const Item = List.Item;

const ExerciseCues = (props) => {
  return(
    <div className="ExerciseCues">
      <sapn> Shoulder back </sapn>
      <sapn> Chest up </sapn>
      <sapn> Track knee over toe </sapn>
      <sapn> Braced core </sapn>
      
    </div>
  )
}

export default ExerciseCues;
