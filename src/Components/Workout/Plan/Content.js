import React, {Component} from 'react'
<<<<<<< HEAD
import {List,Flex, Radio} from 'antd-mobile'
//import './Content.css'
=======
import {List,Flex,Radio} from 'antd-mobile'
>>>>>>> e51e71ce65a235d69ce8c845e1841bd0821b773e

const Item = List.Item

export default class Content extends Component {
  render(){
    return(
      <div>
<<<<<<< HEAD
        <List className="my-list">
          <Item style={{margin:"0 20px"}} arrow="horizontal" multipleLine onClick={() => console.log("it works")}>
            <Flex>
              <Radio.RadioItem disabled    >text   <Flex.Item> text </Flex.Item></Radio.RadioItem>


            </Flex>
          </Item>

        </List>
=======
      <List className="my-list">
      <Item style={{margin:"0 20px"}} arrow="horizontal" multipleLine onClick={() => console.log("it works")}>
        <Flex>
          <Flex.Item><Radio.RadioItem>Day 1</Radio.RadioItem></Flex.Item>
          <Flex.Item>Workout</Flex.Item>
        </Flex>
      </Item>
      </List>
>>>>>>> e51e71ce65a235d69ce8c845e1841bd0821b773e
      </div>
    )
  }
}
