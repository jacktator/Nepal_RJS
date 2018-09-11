import React from 'react';
import {Flex, List} from 'antd-mobile';
// icons taken from http://iconfont.cn/
const Item = List.Item
const RecordList = (props) => {
      return(
        <div className="record-list">
          <div className="list-text">
            <List>
              {
                props.state.exerciseLog.length < props.state.sets ? (
                  <Item style={{backgroundColor:'#a2cf6e'}}>
                    <Flex justify="between" className="list">
                      <Flex.Item>{props.state.exerciseLog.length+1}</Flex.Item>
                      <Flex.Item><div className="list-text"> {props.state.weight} kg * {props.state.reps} reps</div></Flex.Item>
                      <Flex.Item>current</Flex.Item>
                    </Flex>
                  </Item>
                ) : null
              }
              {props.state.exerciseLog.map((v, k) => (
                <Item key={k}>
                    <Flex justify="between" className="list" style={{color:"grey"}}>
                      <Flex.Item><img className="no-copy"src={require('../../../Assets/Exercise/checkCircle.svg')} alt="check-circle"/></Flex.Item>
                      <Flex.Item><div className="list-text"> {v.weight} kg * {v.reps} reps</div></Flex.Item>
                      { (v.weight * v.reps === props.state.personalBest) &&
                        <Flex.Item><img className="no-copy"src={require('../../../Assets/Workout/cup-icon.png')} alt="check-circle"/></Flex.Item>
                      }
                      { (v.weight * v.reps !== props.state.personalBest) &&
                        <Flex.Item>previous</Flex.Item>
                      }
                    </Flex>
                  </Item>
               ) )}
            </List>
          </div>
        </div>
      )
}
export default RecordList;
