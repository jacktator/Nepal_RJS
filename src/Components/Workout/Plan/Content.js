import React, {Component} from 'react'
import {List,Flex} from 'antd-mobile'
const Item = List.Item

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      WorkoutPlans:[
      ]
    }
  }

  // componentWillMount(){
  //   let temp = [];
  //   for(var i=0; this.props.planReducers.days>i;i++) {
  //     let dayNum = i+1;
  //     let disabled = 0;
  //     if(i != 0){
  //      s = 1
  //     }
  //     temp.push({day:'Day '+dayNum,workout:'Upperbody', value: s, isSelected:true})
  //   }
  //   this.setState(WorkoutPlans:temp);
  // }

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
    console.log("goal is "+ this.props.planReducers.goal);
    console.log("number of days is "+ this.props.planReducers.days);
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
