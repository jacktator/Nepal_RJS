import React, {Component} from 'react'
import {List,Flex,Radio} from 'antd-mobile'

const Item = List.Item

export default class Content extends Component {
  render(){
    return(
      <div>
      <List className="my-list">
      <Item style={{margin:"0 20px"}} arrow="horizontal" multipleLine onClick={() => console.log("it works")}>
        <Flex>
          <Flex.Item><Radio.RadioItem>Day 1</Radio.RadioItem></Flex.Item>
          <Flex.Item>Workout</Flex.Item>
        </Flex>
      </Item>
      </List>
      </div>
    )
  }
}
