 import React  from 'react';
import {Button} from 'antd-mobile';
import VideoDetail from './VideoDetail.js';

 const Info = (props) => {
   return (
     <div>
     <VideoDetail videos={props.video}/>
     <div style={{margin:"30px"}}>
     {props.videoDescription}
    </div>
     <Button style={{margin: '0px 5vw 5vw'}}onClick={(e) => props.onBackButtonClicked(e) }>
          Return
    </Button>
     </div>
   )
 }

export default Info;
