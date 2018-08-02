 import React  from 'react';
import {Button} from 'antd-mobile';
import VideoDetail from './VideoDetail.js';

 const Info = (props) => {
   return (
     <div>
     <VideoDetail videos="w1932GYM92w"/>
     <Button onClick={(e) => props.onBackButtonClicked(e) }>
          Go back
        </Button>
     </div>
   )
 }

export default Info;
