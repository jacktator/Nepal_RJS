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
              {
                this.props.exerciseLog.length < this.props.sets ? (
                  <Item style={{backgroundColor:'#4aedc4'}}>
                    <Flex justify="between" className="list">
                      <Flex.Item>{this.props.exerciseLog.length+1}</Flex.Item>
                      <Flex.Item><div className="list-text"> {this.props.weight} kg * {this.props.reps} reps</div></Flex.Item>
                      <Flex.Item>current</Flex.Item>
                    </Flex>
                  </Item>  
                ) : null
              }
              {this.props.exerciseLog.map((v, k) => (
                <Item key={k}>
                    <Flex justify="between" className="list" style={{color:"grey"}}>
                      <Flex.Item><img className="no-copy"src={require('../../../Assets/Exercise/checkCircle.svg')} alt="check-circle"/></Flex.Item>
                      <Flex.Item><div className="list-text"> {v.weight} kg * {v.reps} reps</div></Flex.Item>
                      <Flex.Item>previous</Flex.Item>
                    </Flex>
                  </Item> 
               ) )}
            </List>
          </div>
        </div>
      )
  }

}
//          <Flex.Item>
// {
//   this.props.exerciseLog.tick
//   ?(<img className="no-copy"src={require('../../../Assets/Exercise/checkCircle.svg')} alt="check-circle"/>)
//   :(<div>{this.props.exerciseLog.number}</div>)
// }
// </Flex.Item>
// <Flex.Item style={{color:"grey"}}><div className="list-text"> {this.props.weight} kg * {this.props.reps} reps</div></Flex.Item>
// <Flex.Item style={{color:"grey"}}><div className="list-text">{this.props.exerciseLog.trophy ?(<img className="record-list-trophy" src={require('../../../Assets/Workout/cup-icon.png')} alt="trophy"/>)
// :(this.props.exerciseLog.current?(<div>current</div>):(<div>previous</div>))}</div></Flex.Item>