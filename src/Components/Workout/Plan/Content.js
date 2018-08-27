import React, {Component} from 'react'
import {List,Flex} from 'antd-mobile'
const Item = List.Item

export default class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      WorkoutPlans:[
        {day:'Day 1',workout:'Upperbody', value:1, isSelected:true},
        {day:'Day 2',workout:'Abs', value:2, isSelected:false},
        {day:'Day 3',workout:'Legs', value:32,isSelected:false},
        {day:'Day 4',workout:'Cardio', value:4,isSelected:false},
      ]
    }
  }

  onChange = (value) => {
    let temp = [ ...this.state.WorkoutPlans]
    let allSel = true;
    const index = this.state.WorkoutPlans.findIndex(i => { return i.value === value })
    if(temp[index].isSelected === true && temp.length !== value){
        temp[index+1].isSelected = true;
        this.setState({WorkoutPlans:temp})
    }
    for(var i=0; temp.length > i; i++) {
      if(temp[i].isSelected === false) {
        allSel = false;
      }
    }
    if(allSel === true) {
      // unlock next WEEK
    }
  }

  render() {
    console.log("from content of plan page",this.props.planReducers);
    return(
      <div>
      <List> {this.state.WorkoutPlans.map((data, key) => (
        <Flex key={key}>
        <Flex.Item>
        <Item
        arrow="horizontal"
        disabled={!data.isSelected}
        onClick={() => this.onChange(data.value)}>
        <div style={{fontSize:'16px'}}> {data.day} {data.workout} </div>
        </Item>
        </Flex.Item>
        </Flex>
      ))}
      </List>

      </div>
    )
  }
}
