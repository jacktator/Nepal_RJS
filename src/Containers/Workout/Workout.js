import React, {Component} from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FooterContainer from './FooterContainer';
import WorkoutContainer from './WorkoutContainer';
import Plan from '../../Components/Workout/Plan';
import HistoryComponent from '../../Components/History';
import Hoc from '../../HOC/Hoc';
class Workout extends Component {
  render (){
    return (
      <Hoc>

      { this.props.currentFooterTab === 'historyTab' &&
        <HistoryComponent />
      }
      { this.props.currentFooterTab === 'planTab' &&
        <Plan />
      }
      { this.props.currentFooterTab === 'workoutTab' &&
        <WorkoutContainer />
      }
      { this.props.currentFooterTab === 'meTab' &&
        <div> this is me tab </div>
      }
        <FooterContainer />
      </Hoc>


    )
  }
}
function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab
  }
}
export default connect(mapStateToProps)(Workout);
