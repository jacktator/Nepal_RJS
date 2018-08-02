import React from 'react';
import FooterContainer from '../../Containers/Workout/FooterContainer/';
import PopoverMenu from './PopoverMenu';

import './MainMenu.css';


const MainMenu = (props) => {
    return(
      <div className="main-menu-container">
          <PopoverMenu popup={props}/>
          <div className= "image-containers">
            <img className="image-sources" src={require('../../Assets/MainMenuIcons/mainmenu.png')} alt="mainmenu"/>
          </div>

          <div className="square-button-flex-container">
              <button onClick={(v) => props.workout(v)} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/workout.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Workout</div>
              </button>
              <button onClick={()=> alert("not available yet")}className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/rehab.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Rehab and Posture</div>
              </button>
          </div>
          <div className="square-button-flex-container">
              <button onClick={()=> alert("not available yet")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/profile.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Profile</div>
              </button>
              <button onClick={()=> alert("not available yet")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/content.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Content</div>
              </button>
          </div>
          <div className="square-button-flex-container">
              <button onClick={()=> alert("not available yet")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/ask.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Ask a Question</div>
              </button>
              <button onClick={()=> alert("not available yet")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/faq.svg")} className="square-button-icon" alt="icon"/></div>
              <div>FAQ</div>
              </button>
          </div>
          <FooterContainer />
      </div>

    )
}

export default MainMenu;
