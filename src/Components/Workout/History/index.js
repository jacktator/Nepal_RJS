import React, {Component} from 'react';
import './History.css'
import {List, Menu, ActivityIndicator, NavBar } from 'antd-mobile'

const Item = List.Item;

export default class HistoryComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      WorkoutHistory:[
        {program:'Body Weight Training',startDate:'12/02/18', value:1, isSelected:true},
        {program:'Batman Workout',startDate:'04/04/18', value:2, isSelected:false},
        {program:'Circuit Training',startDate:'09/06/18', value:3,isSelected:false}
      ]
    }
  }

  handleClick(data) {
    this.setState(
      {
        
      }
    )
  }

  render(){
    return(
      <div>

          <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="history-component-sample-image"/>
          <div className="history-component-title"> Training History</div>

          <List className="my-list">
          {this.state.WorkoutHistory.map(data => (
          <Item
            extra={data.startDate}
            onClick={()=> this.handleClick(data.program)}>
              {data.program}
          </Item>
          ))}
          </List>
    </div>
    )
  }
}
