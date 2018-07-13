import React, {Component} from 'react'
import {List,Flex,Radio} from 'antd-mobile'

const RadioItem = Radio.RadioItem
const Item = List.Item

export default class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      WorkoutPlans:[
        {day:'Day 1'},
        {day:'Day 2'},
        {day:'Day 3'},
        {day:'Day 4'},
      ]
    }
  }

  render(){
    return(
        <div>
           <List> {this.state.WorkoutPlans.map((data,key) => (
           <Flex key={key}>
              <Flex.Item>
                  <div>
                  <Item
                    arrow="horizontal"
                    onClick={(e) => this.props.onParticularDayClicked(e, data.value)}>
                    <div style={{fontSize:'16px'}}> {data.day} </div>
                  </Item>
                  </div>
              </Flex.Item>
           </Flex>
         ))}
           </List>

        </div>
    )
  }
}
