import React, {Component} from 'react';
import {Flex, List} from 'antd-mobile';

// icons taken from http://iconfont.cn/

const Item = List.Item

const RecordList = (props) => {
      return(
        <div className="record-list">
          <div className="list-text">
            <List>
              {
                props.exerciseLog.length < props.state.sets ? (
                  <Item style={{backgroundColor:'#a2cf6e'}}>
                    <Flex justify="between" className="list">
                      <Flex.Item>{props.exerciseLog.length+1}</Flex.Item>
                      <Flex.Item><div className="list-text"> {props.state.weight} kg * {props.state.reps} reps</div></Flex.Item>
                      <Flex.Item>current</Flex.Item>
                    </Flex>
                  </Item>
                ) : null
              }
              {props.exerciseLog.map((v, key) => (
                <Item key={key}>
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

export default RecordList;
//          <Flex.Item>
// {
//   props.exerciseLog.tick
//   ?(<img className="no-copy"src={require('../../../Assets/Exercise/checkCircle.svg')} alt="check-circle"/>)
//   :(<div>{props.exerciseLog.number}</div>)
// }
// </Flex.Item>
// <Flex.Item style={{color:"grey"}}><div className="list-text"> {props.weight} kg * {props.reps} reps</div></Flex.Item>
// <Flex.Item style={{color:"grey"}}><div className="list-text">{props.exerciseLog.trophy ?(<img className="record-list-trophy" src={require('../../../Assets/Workout/cup-icon.png')} alt="trophy"/>)
// :(props.exerciseLog.current?(<div>current</div>):(<div>previous</div>))}</div></Flex.Item>
