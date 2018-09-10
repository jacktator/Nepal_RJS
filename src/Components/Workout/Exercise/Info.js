import React  from 'react';
import {Button} from 'antd-mobile';
import VideoDetail from './VideoDetail.js';
import YouTube from 'react-youtube';

const Info = (props) => {
//   let video_id = props.video.split('=')[1];
//   console.log(video_id)
//   var ampersandPosition = video_id.indexOf('&');
//   if(ampersandPosition != -1) {
//   video_id = video_id.substring(0, ampersandPosition);
// }


  // let temp = data.split('&');
  // let  vidoeId= temp[0]
   // console.log(video_id)

  return (
    <div>
    <YouTube
      videoId="DoSbvTq-ZjU"
      opts={{
       height: '350',
       width: '600',
       }}
    />
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
