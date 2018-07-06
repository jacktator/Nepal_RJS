import React, {Component} from 'react'
import {List,Flex} from 'antd-mobile'
import './Content.css'

const Item = List.Item
const Brief = Item.Brief

class ListExample extends Component {
  state = {
    disabled: false,
  }
}


export default class Content extends Component {
  render(){
    return(
      <div>
      <List className="my-list">
      <Item style={{margin:"0 20px"}} arrow="horizontal" multipleLine onClick={() => console.log("it works")}>
        <Flex>
          <Flex.Item> text </Flex.Item>
          <Flex.Item> text </Flex.Item>
          <Flex.Item> null </Flex.Item>
        </Flex>
      </Item>
      </List>
      </div>
    )
  }
}
