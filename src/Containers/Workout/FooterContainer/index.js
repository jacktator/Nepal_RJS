// @flow
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from './actions';
import Footer from '../../../Components/Workout/Footer';
import Hoc from '../../../HOC/Hoc';
class FooterContainer extends Component{
  render () {
    return (
      <Hoc>
        <Footer
          selectedTab = {this.props.FooterReducers.currentFooterTab}
          hidden = {this.props.FooterReducers.hidden}
          selectFooter = {this.props.selectFooter}
        />
        {/*{ this.props.FooterReducers.currentFooterTab === 'historyTab' &&
          <Redirect to="/history" />
        }{ this.props.FooterReducers.currentFooterTab === 'planTab' &&
          <Redirect to="/plan" />
        }{ this.props.FooterReducers.currentFooterTab === 'workoutTab' &&
          <Redirect to="/workout" />
        }{ this.props.FooterReducers.currentFooterTab === 'meTab' &&
          <span> this is me tab </span>
        }*/}
      </Hoc>

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
