import React, {Component} from 'react';
import './History.css'
import {List} from 'antd-mobile'

const Item = List.Item;

export default class HistoryComponent extends Component {
  render(){
    return(
      <div>
          <div className="image-container">
            <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="sample-image"/>
            <div className="title"> Training History</div>
          </div>

          <List className="my-list">
          <Item extra={'Date dd/mm/yyyy'}>Workout Program:</Item>
          <Item extra={'Date dd/mm/yyyy'}>Workout Program:</Item>
          <Item extra={'Date dd/mm/yyyy'}>Workout Program:</Item>
          </List>
    </div>
    )
  }
}
