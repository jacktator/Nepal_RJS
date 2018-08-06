// @flow
import React, {Component} from 'react';
import {Redirect} from 'react-router';
import Hoc from '../../HOC/Hoc';
import MainMenu from '../../Components/MainMenu'

class MainMenuContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      workout:false,
      profile:false,
      /*rehab and posture:false*/
      /*profile:false*/
      /*content:false*/
      /*ask:false*/
      /*faq:false*/
    }
  }

  workoutHandler = (e) => {
    //e.preventDefault();
    this.setState({workout: true})
  }

  profileHandler = (e) => {
    //e.preventDefault();
    this.setState({profile:true})
  }

  render () {
    return (
      <Hoc>
        <MainMenu workout={this.workoutHandler} profile={this.profileHandler}/>

        { this.state.workout &&
          <Redirect to="/workout" />
        }
        { this.state.profile &&
          <Redirect to="/profile" />
        }
      </Hoc>

    )
  }
}

export default MainMenuContainer;
