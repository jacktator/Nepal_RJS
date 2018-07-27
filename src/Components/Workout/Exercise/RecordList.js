import React, {Component} from 'react';
import {Flex, List} from 'antd-mobile';

// icons taken from http://iconfont.cn/

const Item = List.Item
export default class RecordList extends Component{
  constructor(props){
    super(props);
    this.state={
      data: [
        {reps:10, kgs: 10},
        {reps:10, kgs: 10},
        {reps:10, kgs: 10}

      ]
    }
  }

  render(){
    const list = this.state.data.map((data, key)=>{
      return(
        <div key={key} className="list-text">
        { key ===0 && (
          <div>
          <List>
          <Item>
          <Flex justify="between" className="list">
          <Flex.Item><img src={require('../../../Assets/Exercise/checkCircle.svg')} alt="check-circle"/></Flex.Item>
          <Flex.Item><div className="list-text"><strong>{data.kgs}kg * {data.reps} reps</strong></div></Flex.Item>
          <Flex.Item><img src={require('../../../Assets/Workout/cup-icon.png')} alt="trophy"/></Flex.Item>
          </Flex>
          </Item>
          </List>
          </div>
        )}
        { key !==0 && (
          <div>
          <List>
          <Item>
          <Flex justify="between" className="list">
          <Flex.Item>{key+1}</Flex.Item>
          <Flex.Item style={{color:"grey"}}><div className="list-text">{data.kgs}kg * {data.reps} reps</div></Flex.Item>
          <Flex.Item style={{color:"grey"}}><div className="list-text">previous</div></Flex.Item>
          </Flex>
          </Item>
          </List>
          </div>
        )}

        </div>
      )
    });
    return(
      <div className="record-list">
        {list}
      </div>
    );
  }
}
