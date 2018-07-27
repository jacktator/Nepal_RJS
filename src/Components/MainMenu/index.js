import React, {Component} from 'react';
import {Button,Flex} from 'antd-mobile';
import './MainMenu.css';
import FooterContainer from '../../Containers/Workout/FooterContainer/';

export default class MainMenu extends Component{
  render(){
    return(
      <div className="main-menu-container">
          <div className= "image-containers">
            <img className="image-sources" src={require('../../Assets/Workout/immediate-fat-loss.jpg')} alt="immediate fat loss"/>
          </div>
          <div className="square-button-flex-container">
            <button onClick={()=> alert("clicked")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/workout.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Workout</div>
            </button>
            <button onClick={()=> alert("clicked")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/rehab.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Rehab and Posture</div>
            </button>
          </div>
          <div className="square-button-flex-container">
            <button onClick={()=> alert("clicked")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/profile.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Profile</div>
            </button>
            <button onClick={()=> alert("clicked")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/content.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Content</div>
            </button>
          </div>
          <div className="square-button-flex-container">
            <button onClick={()=> alert("clicked")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/ask.svg")} className="square-button-icon" alt="icon"/></div>
              <div>Ask a Question</div>
            </button>
            <button onClick={()=> alert("clicked")} className="square-button">
              <div><img src={require("../../Assets/MainMenuIcons/faq.svg")} className="square-button-icon" alt="icon"/></div>
              <div>FAQ</div>
            </button>
          </div>
          <FooterContainer />
      </div>

    )
  }
}
