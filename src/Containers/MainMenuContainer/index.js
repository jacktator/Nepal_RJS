// @flow
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import HOC from '../../HOC/Hoc';
import MainMenu from '../../Components/MainMenu';
import {selectFooter} from '../Workout/FooterContainer/actions';

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
  componentWillMount(){
    if(this.props.currentFooterTab!== 'mainMenuTab' ){
      this.props.selectFooter('mainMenuTab');
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
      <HOC>
        <MainMenu workout={this.workoutHandler} profile={this.profileHandler}/>

        { this.state.workout &&
          <Redirect to="/plan" />
        }
        { this.state.profile &&
          <Redirect to="/profile" />
        }
      </HOC>
    )
  }
}
function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainMenuContainer);
