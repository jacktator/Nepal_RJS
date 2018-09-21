import React from 'react';
import './History.css'
import {List} from 'antd-mobile';
import {Link}  from 'react-router-dom'

const HistoryComponent = (props) => {
    let RenderPage = 
    (!props.loading) ? 
    ((props.history)?
        <List className="history-list">
          {props.history.map((i, key) =>
            <Link key={key} to={`/history/${i.program_id}`}>
              <List.Item arrow='horizontal'>{i.training_goal}</List.Item>
            </Link>
          )}
        </List>
        :<div>No History Yet</div>
    ):(<div className="loader">Loading...</div>)
    return(
      <div className="history-container">
        {RenderPage}
      </div>
    )
}

export default HistoryComponent;
// onClick={(e) => props.onListProgramClick(e)} arrow='horizontal'