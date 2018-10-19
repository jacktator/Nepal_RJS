import React from 'react';
import {Button, Flex, List} from 'antd-mobile';

import './RehabExercise.css'

const Item = List.Item

const RecordList = (props) => {
  return(
    <div className="RepsBox">
     {/* reps group Here */}
     <div className="record-list">
       <List>
         {[...Array(props.state.sets)].map((value, key) => {
           return displayRecord(props, key);
         })}
       </List>
     </div>
     {/* complete butotn Here */}
     { (props.state.currentSets > props.state.sets) ? (
       <div className="completeButton">
         <Button type="primary" inline onClick={()=> props.next() }>
            Next
         </Button>
       </div>
     ):(
       <div className="completeButton">
         <Button type="primary" inline onClick={()=> props.complete() }>
           Complete
         </Button>
       </div>
     )

     }

    </div>
  )
}

const displayRecord =(props, index) => {
    return(
      <div className="list-records" key={index} >
        <Item >
          <Flex justify="between" className="list">
          <span className="list-number">{index+1}.   {props.state.highestReps} {props.state.repsOrSec}</span>
          </Flex>
        </Item>
      </div>
    )

}
export default RecordList;
