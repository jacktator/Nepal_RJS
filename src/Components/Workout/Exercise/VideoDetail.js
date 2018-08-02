import React from 'react';
import YouTube from 'react-youtube';

const VideoDetail = ({videos})=>{

  if(!videos){
    return <div>Loading...</div>;
  }

  const videoID= videos;
  const url =`https://www.youtube.com/embed/${videoID}`;
  //上面的语句，等同于 const url ='https://www.youtube.com/embed/'+ videoID; 此处注意符号的变化

  return(
    <div className="video-detail col-md-8">
    <iframe src={url} frameborder="0" allowfullscreen/>
    </div>
  );
}


export default VideoDetail;
