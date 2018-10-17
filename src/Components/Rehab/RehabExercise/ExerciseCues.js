import React from 'react';
import {List} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Exercise.css'

const Item = List.Item;

const ExerciseCues = (props) => {
  return(
    <div className="ExerciseCues">
      <List>
        <Item>
          exercise
        </Item>
        <Item>
          exercise
        </Item>
      </List>
    </div>
  )
}

export default ExerciseCues;
