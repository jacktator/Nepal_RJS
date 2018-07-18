import React from 'react';
import './History.css'
import {List} from 'antd-mobile';
import Header from './Header';

const Item = List.Item;

  const HistoryComponent = (props) => {
    return(
      <div>
        <Header />
        <List className="my-list">
          {props.data.map((val, key) =>
            <Item key={key} onClick={(e) => props.onListProgramClick(e, val.program)} extra={val.date}>{val.program}</Item>
          )}
        </List>
      </div>
    )
  }

  export default HistoryComponent;
