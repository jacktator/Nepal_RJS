import React, {Component} from 'react'
import {List,Flex,Radio} from 'antd-mobile'

const RadioItem = Radio.RadioItem
const Item = List.Item

// two variations of contents, please comment out the one that is not used.

export default class Content extends Component {

  constructor(props){
    super(props);
    this.state = {
      /*WorkoutPlans:[
        {day:'Day 1',workout:'Upperbody', value:1, isSelected:true},
        {day:'Day 2',workout:'Abs', value:2, isSelected:false},
        {day:'Day 3',workout:'Legs', value:3,isSelected:false},
        {day:'Day 4',workout:'Cardio', value:4,isSelected:false},
      ],*/
      WorkoutPlans2:[
        {day:'Day 1',workout:'Upperbody', value:1, isSelected:true},
        {day:'Day 2',workout:'Abs', value:2, isSelected:false},
        {day:'Day 3',workout:'Legs', value:3,isSelected:false},
        {day:'Day 4',workout:'Cardio', value:4,isSelected:false},
      ]
    }
  }

  /*onChange = (value) => {
    //write code to set default checked here so next time it will be checked by default.

    let temp = [ ...this.state.WorkoutPlans]
    if(temp.length !== value){
      temp[value].isSelected = true;
      this.setState({WorkoutPlans:temp})
    }

  }*/

  onChange2 = (value) => {
    //write code to set default checked here so next time it will be checked by default.

    let temp = [ ...this.state.WorkoutPlans2]
    if(temp.length !== value){
      temp[value].isSelected = true;
      this.setState({WorkoutPlans2:temp})
    }

  }

  render(){

    return(
        <div>
           {/*<List> {this.state.WorkoutPlans.map(data => (
                   <Flex>
                      <Flex.Item>
                          <div>
                          <Item arrow="horizontal">
                          <RadioItem
                            style={{marginRight:"50px"}}
                            disabled={!data.isSelected}
                            onChange={() => this.onChange(data.value)}
                          >
                            <div style={{fontSize:'16px'}}> {data.day} {data.workout} </div>
                          </RadioItem>
                          </Item>
                          </div>
                      </Flex.Item>
                   </Flex>
           ))}
           </List>*/}
           <List> {this.state.WorkoutPlans2.map(data2 => (
           <Flex>
              <Flex.Item>
                  <div>
                  <Item
                    arrow="horizontal"
                    disabled={!data2.isSelected}
                    onClick={() => this.onChange2(data2.value)}>
                    <div style={{fontSize:'16px'}}> {data2.day} {data2.workout} </div>
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
