import React from 'react';
import {Button, Flex, List} from 'antd-mobile';
import './Exercise.css'

const Item = List.Item

const RepsBox = (props) => {
  return(
    <div className="RepsBox">
     {/* reps group Here */}
     <div className="record-list">
       some thing here
       <List>
         {[...Array(parseInt(4, 10))].map((value, key) => {
           /*return displayRecord(props, key);*/
         })}
       </List>
     </div>
     {/* complete butotn Here */}

     <div className="completeButton">
      <Button type="primary" inline size="small" style={{ backgroundColor: '#00EEB2' }}>Complete</Button>
     </div>
    </div>

  )
}
export default RepsBox;
