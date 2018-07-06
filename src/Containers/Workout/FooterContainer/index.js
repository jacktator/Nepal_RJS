import React, {Component} from 'react';
import Footer from '../../../Components/Workout/Footer';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from './actions';

class FooterContainer extends Component{
  render () {
    return (
      <Footer
        selectedTab = {this.props.FooterReducers.currentFooterTab}
        hidden = {this.props.FooterReducers.hidden}
        selectFooter = {this.props.selectFooter}

      />
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
