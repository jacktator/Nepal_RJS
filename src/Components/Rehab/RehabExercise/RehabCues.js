import React from 'react';
import {List} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './RehabExercise.css'

const Item = List.Item;

const ExerciseCues = (props) => {
  return(
    <div className="ExerciseCues">
      <List>
        <Item> Shoulder back </Item>
        <Item> Chest up </Item>
        <Item> Track knee over toe</Item>
        <Item> Braced core </Item>
      </List>
    </div>
  )
}

export default ExerciseCues;
