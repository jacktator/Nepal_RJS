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
      currentSets: 1,
      rehabCategory: "",
      rehabName: "",
      sets: 0,
      repsOrSec: "reps",
      highestReps: 0,
      rehabLog: [],
    }
  }
  componentWillMount() {
    //this.props.getRehabRecord(this.props.RehabReducers.rehabID);
    let rehabIndex=0;
    let dataIndex=0;
    if(this.props.match.params.index) {
      rehabIndex = parseInt(this.props.match.params.index, 10);
      this.setState({rehabIndex})
    }
    this.calculateRehabLog(rehabIndex, dataIndex);
  }

  calculateRehabLog = (rehabIndex, dataIndex) => {
    console.log(rehabIndex);
    console.log(dataIndex);
    let {rehab} = this.props.RehabReducers;
    let {rehabRecord} = this.props.RehabReducers;
    console.log("rehab form calculate rehab log",rehab);
    if(rehab){
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
        if(rehabRecord){
          if(rehabRecord.rehab){
            let rehabIndex = rehabRecord.rehab.findIndex( i => { return (i.rehab_category === rehabCategory) });
            if(rehabIndex >= 0){
              let dataIndex = rehabRecord.rehab[rehabIndex].data.findIndex ( i => { return (i.name === rehabName) });
              if(dataIndex >=0) {
                let rehabLog = rehabRecord.rehab[rehabIndex].data[dataIndex];
                this.setState({ rehabLog, currentSets: rehabLog.value.length + 1 })
              }
            }
          }
        }
    }
  }

  onNextButtonHandler = () => {
    this.setState({rehabLog:[],currentSets: 1, rehabCategory: "", rehabName: "", sets: 0, repsOrSec: "reps", highestReps: 0})
    alert("next button");
    let rehabIndex = this.state.rehabIndex;
    let dataIndex = this.state.dataIndex;
    if(dataIndex !== 3){
      dataIndex += 1;
      this.setState({ dataIndex})
    }else{
      if(rehabIndex === 0){
        rehabIndex = 1;
        dataIndex = 0;
        this.setState({ rehabIndex, dataIndex})
      }else{
        rehabIndex = 0;
        dataIndex = 0;
        this.setState({ rehabIndex, dataIndex})
      }
    }
    this.calculateRehabLog(rehabIndex, dataIndex);

  }
  onCompleteButtonHander = () => {
    let {rehabRecordID} = this.props.RehabReducers;
    let {rehabRecord} = this.props.RehabReducers;
    let {sets, highestReps, repsOrSec, rehabCategory, rehabName} = this.state;
    this.props.saveRehabRecord(rehabRecordID, rehabRecord, rehabCategory,rehabName, sets, repsOrSec, highestReps);
    this.setState({ currentSets: this.state.currentSets+1 })
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
            next = {this.onNextButtonHandler }
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
