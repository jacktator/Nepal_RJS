import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';

import {getRehabRecord, saveRehabRecord} from '../actions';
import RehabExercise from '../../../Components/Rehab/RehabExercise';
import Modal from '../../../Components/UI/Modal';
import Hoc from '../../../HOC/Hoc';
import Loading from '../../../Components/Loading';

class RehabExerciseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      rehabIndex: 0,
      dataIndex: 0,
      rehabCategory: "",
      rehabName: "",
      sets: 0,
      repsOrSec: "reps",
      highestReps: 0,
    }
  }
  componentWillMount() {
    this.props.getRehabRecord(this.props.RehabReducers.rehabID);
    let rehabIndex=0;
    let dataIndex=0;
    if(this.props.match.params.index) {
      rehabIndex = parseInt(this.props.match.params.index, 10);
      this.setState({rehabIndex})
    }
    this.calculateRehabLog();
  }

  calculateRehabLog = () => {
    let {rehab} = this.props.RehabReducers;
    if(rehab){
      let rehabIndex = this.state.rehabIndex;
      let dataIndex = this.state.dataIndex;
      let rehabData = rehab.rehab[rehabIndex].data[dataIndex];
      let rehabCategory = rehab.rehab[rehabIndex].rehab_category;
      let repsOrSec, highestReps;
      let rehabName = rehabData.name;
      let sets = parseInt(rehabData.sets,10)
      if(rehabData.reps==""){
        repsOrSec = "Sec";
        let temp = rehabData.time.split('-');
        highestReps = parseInt(temp[temp.length-1], 10);
      }else{
        repsOrSec = "Reps";
        let temp = rehabData.reps.split('-');
        highestReps = parseInt(temp[temp.length-1], 10);
      }
      this.setState({
        rehabName, sets, repsOrSec, highestReps, rehabCategory
      })
    }

  }
  onCompleteButtonHander = () => {
    let {rehabRecordID} = this.props.RehabReducers;
    let {rehabRecord} = this.props.RehabReducers;
    let {sets, highestReps, repsOrSec, rehabCategory, rehabName} = this.state;
    this.props.saveRehabRecord(rehabRecordID, rehabRecord, rehabCategory,rehabName, sets, repsOrSec, highestReps);
  }

  render() {
    var days = new Date().getDay();
    let {rehab, isFetchingRehabRecord,rehabRecord} = this.props.RehabReducers;
    if(rehab){
      console.log("Data from state", this.state);
      return(
        <div>
          <RehabExercise
            state = {this.state}
            complete = {this.onCompleteButtonHander}
          />
          {isFetchingRehabRecord && (
            <Hoc>
              <Modal modalFor = "modal-for-loading">
                <Loading mode="selectExercise"/>
              </Modal>
            </Hoc>
          )}
        </div>
      )
    }else{
      return(
        <Redirect to="/rehab" />
      )
    }
  }
}
function mapStateToProps(state){
  return{
    RehabReducers: state.RehabReducers
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getRehabRecord, saveRehabRecord
  }, dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps)(RehabExerciseContainer);
