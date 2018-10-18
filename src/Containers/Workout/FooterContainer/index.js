// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFooter } from './actions';
import Footer from '../../../Components/Workout/Footer/index';

class FooterContainer extends Component {

  render() {
    return (
      <Footer
        currentPage={this.props.currentPath}
        selectedTab={this.props.FooterReducers.currentFooterTab}
        hidden={this.props.FooterReducers.hidden}
        selectFooter={this.props.selectFooter}
        currentDay={this.props.currentDay}
      />
    )
  }
}
function mapStateToProps(state) {
  return {
    FooterReducers: state.FooterReducers,
    currentDay: state.WorkoutReducers.currentDay,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectFooter
  }, dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(FooterContainer);
