import React, {Component} from 'react';
import {Flex, List} from 'antd-mobile';

// icons taken from http://iconfont.cn/

const Item = List.Item

export default class RecordList extends Component{
  constructor(props){
    super(props);
  }

  render(){

      return(
        <div className="record-list">
        <div className="list-text">
          <List>
          <Item>
          <Flex justify="between" className="list">
          <Flex.Item>
          {
            this.props.exerciseLog.tick
            ?(<img className="no-copy"src={require('../../../Assets/Exercise/checkCircle.svg')} alt="check-circle"/>)
            :(<div>{this.props.exerciseLog.number}</div>)
          }
          </Flex.Item>
          <Flex.Item style={{color:"grey"}}><div className="list-text"> {this.props.exerciseLog.weight} kg * {this.props.exerciseLog.reps} reps</div></Flex.Item>
          <Flex.Item style={{color:"grey"}}><div className="list-text">{this.props.exerciseLog.trophy ?(<img className="record-list-trophy" src={require('../../../Assets/Workout/cup-icon.png')} alt="trophy"/>)
          :(this.props.exerciseLog.current?(<div>current</div>):(<div>previous</div>))}</div></Flex.Item>
          </Flex>
          </Item>
          </List>
          </div>
        </div>
      )
  }

}
