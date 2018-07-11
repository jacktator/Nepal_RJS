import React from 'react';

import './History.css';

const Header = (props) => {
  return(
    <div>
      <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="history-component-sample-image"/>
      <div className="history-component-title"> Training History</div>
    </div>
  )
}

export default Header;
