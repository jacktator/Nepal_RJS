import React from 'react';
import {Flex, Button, List} from 'antd-mobile';
import './Exercise.css';
const Item = List.Item;
const ReadOnly = (props) => {
  return(
    <div>
    <Flex justify="center" className="next-button">
      <div style = {{marginTop:"5%"}}>
        <Flex.Item>
          <Button type="primary" inline="true" size="large" onClick={()=> props.onNextButtonHandler() }>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          View next
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
        </Flex.Item>
        </div>
      </Flex>

    {props.state.exerciseLog.map((value, index) => (
      <div className="list-records" key={index}>
        {(props.state.exercisePlace==="gym") &&
        <Item>
        <Flex justify="between" className="list" style={{color:"black"}}>
        <span className="list-number">{index+1}</span>
        <Flex.Item></Flex.Item>
        <Flex.Item><div className="list-text"> {props.state.exerciseLog[index].weight} kgs * {props.state.exerciseLog[index].reps} reps</div></Flex.Item>
        { (props.state.exerciseLog[index].weight * props.state.exerciseLog[index].reps === props.state.personalBest) &&
          <Flex.Item><img className="no-copy"src={require('../../../Assets/Workout/cup-icon.png')} alt="check-circle"/></Flex.Item>
        }
        { (props.state.exerciseLog[index].weight * props.state.exerciseLog[index].reps !== props.state.personalBest) &&
          <Flex.Item> </Flex.Item>
        }
        </Flex>
        </Item>
      }
      {(props.state.exercisePlace === "home") &&
      <Item>
      <Flex justify="between" className="list" style={{color:"black"}}>
      <span className="list-number">{index+1}</span>
      <Flex.Item></Flex.Item>
      <Flex.Item><div className="list-text"> {props.state.exerciseLog[index].reps} reps</div></Flex.Item>
      <Flex.Item> </Flex.Item>

      </Flex>
      </Item>
    }
  </div>
))}
</div>
)
}

export default ReadOnly;
