import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import Workout from '../../../Components/Workout/Workout';
import SelectExercise from '../../../Components/Workout/SelectExercise';
import Modal from '../../../Components/UI/Modal';
import FooterContainer from '../FooterContainer';
import Hoc from '../../../HOC/Hoc';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChangeExcercise: false,
      excerciseArray: [
        { value: 0, description: 'Push ups', imgurl: 'https://files.brightside.me/files/news/part_34/340810/14565160-1-0-1496126804-1496126811-650-0c369e17e2-1496430586.jpg'},
        { value: 1, description: 'Barbell Bench Press', imgurl: 'https://www.bodybuilding.com/images/2016/july/10-best-chest-exercises-for-building-muscle-v2-1-700xh.jpg'},
        { value: 2, description: 'Seated Macine Chest Press', imgurl: 'https://www.bodybuilding.com/images/2016/july/10-best-chest-exercises-for-building-muscle-v2-4-700xh.jpg'},
        { value: 3, description: 'Dips for chest', imgurl: 'https://www.bodybuilding.com/images/2016/july/10-best-chest-exercises-for-building-muscle-v2-6-700xh.jpg'},
      ],
    }
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'workoutTab' ){
      this.props.selectFooter('workoutTab');
    }
  }
  onChangeHandler = () => {
    this.setState({ isChangeExcercise: true })
  }
  onKeepHandler = () => {
    alert("onKeep");
  }
  onStartHandler = () => {
    alert("Starting you work out new ");
  }
  onSelectExerciseHandler = (index) => {
    alert(index);
    this.setState({ isChangeExcercise: false })
  }

  render() {
    return (
      <Hoc>
        <Workout
        onChange = {this.onChangeHandler}
        onKeep = {this.onKeepHandler}
        onStart = {this.onStartHandler}
        />
        {(this.state.isChangeExcercise) && (
          <Modal modalFor = "selectExercise">
            <SelectExercise
              onSelect = {this.onSelectExerciseHandler}
              excerciseArray = {this.state.excerciseArray}
            />
          </Modal>
        )}
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
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps) (WorkoutContainer);
