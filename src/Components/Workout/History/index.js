import React from 'react';
import './History.css'
import {List} from 'antd-mobile';
import Header from './Header';


const Item = List.Item;

  const HistoryComponent = (props) => {
    return(
      <div className="history-container">
        <Header />
        <List className="history-list">
          {props.data.map((val, key) =>
            <Item key={key} onClick={(e) => props.onListProgramClick(e, val.program)} extra={val.date}>{val.program}</Item>
          )}
        </List>
      </div>
    )
  }

  export default HistoryComponent;

// const HistoryComponent = (props) => {
//     // console.log('this is from HistoryContainer',props.WorkoutReducers.record.program_id)
//     let record = props.WorkoutReducers.record;
//     let programIndex = props.WorkoutReducers.programID.toString()
//     // console.log("this is from record",record)
//     // console.log("this is from program id ",props.WorkoutReducers.programID.toString())
//     // console.log("this is from record program id",record.program_id)

//     let {program_name} = props.WorkoutReducers.program;
//     // let programIndex =(props.WorkoutReducers.record.findIndex(
//     //   i => {return i.program_id === props.WorkoutReducers.programID.toString()
//     //   }))
//     // console.log("program index:", programIndex)
//     let RenderPage = null;
//     ( programIndex === record.program_id) ? (
//       RenderPage=(
//         <List >
//         {/* {props.data.map((val, key) =>
//           <Item key={key} onClick={(e) => props.onListProgramClick(e, val.program_name)} >{val.program_name}</Item>
//         )} */}
//         <List.Item onClick={(e)=> props.onListProgramClick(e)}>
//           {program_name}
//         </List.Item>
//       </List>
//       )
//     ): (
//       <List>
//         <List.Item>
//           Program Not Found!
//         </List.Item>
//       </List>
//     )
//     return(
//       <div >
//         <Header />
//         {RenderPage}
//       </div>
//     )
// }


// export default HistoryComponent;
