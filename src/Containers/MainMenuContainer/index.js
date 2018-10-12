// @flow
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import HOC from '../../HOC/Hoc';
import MainMenu from '../../Components/MainMenu';
import {selectFooter} from '../Workout/FooterContainer/actions';
import {checkLogout} from '../RootContainer/action';

class MainMenuContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      workout:false,
      rehab: false,
      profile:false,

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
  rehabHandler = (e) => {
    this.setState({rehab: true})
  }

  profileHandler = (e) => {
    //e.preventDefault();
    this.setState({profile:true})
  }
  logoutHandler = (e) => {
    // e.preventDefault();
    this.props.checkLogout();
  }

  render () {
    return (
      <HOC>
        <MainMenu
          workout={this.workoutHandler}
          rehab={this.rehabHandler}
          profile={this.profileHandler}
          logout={this.logoutHandler}
        />

        { this.state.workout &&
          <Redirect to="/plan" />
        }
        { this.state.rehab &&
          <Redirect to="/rehab" />
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
    selectFooter, checkLogout
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainMenuContainer);
