// @flow
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from './actions';
import Footer from '../../../Components/Workout/Footer';
// import Hoc from '../../../HOC/Hoc';
// import {Redirect} from 'react-router';

class FooterContainer extends Component{

  render() {
    return (
      // <Hoc>
        <Footer
        currentPage={this.props.currentPath}
          selectedTab = {this.props.FooterReducers.currentFooterTab}
          hidden = {this.props.FooterReducers.hidden}
          selectFooter = {this.props.selectFooter}
        />
        // { this.props.FooterReducers.currentFooterTab === 'historyTab' &&
        //   <Redirect to="/history" />
        // }{ this.props.FooterReducers.currentFooterTab === 'planTab' &&
        //   <Redirect to="/plan" />
        // }{ this.props.FooterReducers.currentFooterTab === 'workoutTab' &&
        //   <Redirect to="/workout" />
        // }{ this.props.FooterReducers.currentFooterTab === 'meTab' &&
        //   <Redirect to="/mainmenu" />
        // }
        // { this.props.FooterReducers.currentFooterTab === 'mainMenuTab' &&
        //   <Redirect to="/mainmenu" />
        // }
      // </Hoc>

    )
  }
}
function mapStateToProps(state){
  return {
    FooterReducers: state.FooterReducers
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps) (FooterContainer);
