// @flow
import React, {Component} from 'react';
import {Redirect} from 'react-router';
import Hoc from '../../HOC/Hoc';
import MainMenu from '../../Components/MainMenu'

class MainMenuContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      workout:false
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
  render () {
    return (
      <Hoc>
        <MainMenu workout={this.workoutHandler}/>

        { this.state.workout &&
          <Redirect to="/workout" />
        }
      </Hoc>

    )
  }
}

export default MainMenuContainer;
