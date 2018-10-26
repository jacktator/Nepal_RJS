import React from 'react';
import './History.css'
import {List,Toast} from 'antd-mobile';
import {Link}  from 'react-router-dom'

const HistoryComponent = (props) => {
    console.log(props)
    let RenderPage = 
    (!props.loading) ? 
    (props.HistoryReducers.program ? 
    ((props.HistoryReducers.history)?
        <List className="history-list">
          {props.HistoryReducers.history.map((i, key) =>
            <Link key={key} to={`/history/${i.program_id}`}>
              <List.Item arrow='horizontal'>{i.training_goal}</List.Item>
            </Link>
          )}
        </List>
        :<div>No History Yet</div>):  
        <List className="history-list">
          {props.HistoryReducers.history.map((i, key) =>
            <Link key={key} to={`/plan/`} onClick={props.exerciseOnClick}>
              <List.Item key={key} arrow='horizontal' >{i.training_goal}</List.Item>
            </Link>
          )}
        </List>
    ):(<div className="loader">Loading...</div>)
    return(
      <div className="history-container">
        {RenderPage}
      </div>
    )
}

export default HistoryComponent;
// onClick={(e) => props.onListProgramClick(e)} arrow='horizontal'