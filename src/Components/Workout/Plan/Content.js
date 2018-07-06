import React, {Component} from 'react'
import {List,Flex,Radio} from 'antd-mobile'

const RadioItem = Radio.RadioItem
const Item = List.Item


export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      WorkoutPlans:[
        {day:'Day 1',workout:'Upperbody'},
        {day:'Day 2',workout:'Abs'},
        {day:'Day 3',workout:'Legs'},
        {day:'Day 4',workout:'Cardio'},
      ]
    }
  }

  render(){
    return(
        <div>
           <List className="my-list"> {this.state.WorkoutPlans.map(data => (
              <div>
                   <Flex>
                      <Flex.Item>
                          <Item arrow="horizontal">
                          <RadioItem style={{marginRight:"50px"}}>
                            <div style={{fontSize:'16px'}}>
                              {data.day}       {data.workout}
                              </div>
                          </RadioItem>
                          </Item>
                      </Flex.Item>
                   </Flex>
             </div>
             ))}
           </List>
        </div>
    )
  }
}
