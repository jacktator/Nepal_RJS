import React from 'react';
import {NoticeBar} from 'antd-mobile';
import './Questionnaire.css';
const ShowNoticeBar = (props) => {
  return(
    <NoticeBar icon={null} >
      <div className="noticebar">
        The following information is anonymous
      </div>
    </NoticeBar>

  )
}
export default ShowNoticeBar;
