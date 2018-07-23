import React from 'react';
import {NoticeBar} from 'antd-mobile'
import Hoc from '../../HOC/Hoc.js';
const ShowNoticeBar = (props) => {
  return(
    <div style={{textAlign: "center", fontWeight:"bold"}}>
      <NoticeBar icon={null} >
        The following information is anonymous
      </NoticeBar>
    </div>
  )
}
export default ShowNoticeBar;
