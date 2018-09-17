import React from 'react';
import './History.css'
import {List} from 'antd-mobile';

const Item = List.Item;
  
const HistoryComponent = (props) => {
    let program_name = [];
    program_name.push(props.data.program.program_name);
    let RenderPage =
    // (programID === parseInt((props.record.program_id),10) && programID) ? ( 
    (!props.loading) ? 
    (
        <List className="history-list">
          {program_name.map((i, key) =>
            <Item key={key} onClick={(e) => props.onListProgramClick(e)} arrow='horizontal'>{i}</Item>
          )}
        </List>
    ):(<div className="loader">Loading...</div>)
      // ):(
      //   <List>
      //     <Item>
      //       No Histroy Found
      //     </Item>
      //   </List>
      //   )
    return(
      <div className="history-container">
        {RenderPage}
      </div>
    )
}

export default HistoryComponent;