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
          {[...Array(4)].map((value, key) => {
            return displayRecord(props, key);
          })}
        </List>
      </div>
      {/* complete butotn Here */}

      <div className="completeButton">
        <Button type="primary" inline onClick={()=> props.complete() }>
          Complete
        </Button>
      </div>
    </div>
  )
}

const displayRecord =(props, index) => {
  return(
    <div className="list-records" key={index} >
      <Item >
        <Flex justify="between" className="list">
          <span className="list-number">{index+1}</span>
        </Flex>
      </Item>
    </div>
  )

}
export default RecordList;
