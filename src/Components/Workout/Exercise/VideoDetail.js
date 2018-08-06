import React from 'react';
import YouTube from 'react-youtube';

const VideoDetail = ({videos})=>{

  if(!videos){
    return <div>Loading...</div>;
  }
  /* Note: some videos are not playing in localhost on mobile phone, but if they are deployed it works properly, the following
  sample video works for both localhost and when deployed but if you want to throw in a value use the other line*/
  const videoID= videos;
  //const url =`https://www.youtube.com/embed/${videoID}`;
  const url =`http://www.youtube.com/embed/n_dZNLr2cME?autoplay=1`;

  return(
    <div>
    <iframe className="embed-responsive-item" src={url} allow="autoplay" allowfullscreen/>
    </div>
  );
}


export default VideoDetail;
