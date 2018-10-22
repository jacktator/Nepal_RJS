import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import {ActivityIndicator} from 'antd-mobile';

import {getRehabRecord, saveRehabRecord, completedCurrentRehab} from '../actions';
import RehabExercise from '../../../Components/Rehab/RehabExercise';
import Modal from '../../../Components/UI/Modal';
import Hoc from '../../../HOC/Hoc';
import Loading from '../../../Components/Loading';

class RehabExerciseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      goBack: false,

      rehabIndex: 0,
      dataIndex: 0,
      currentSets: 1,
      rehabCategory: "",
      rehabName: "",
      reps: "",
      sets: 0,
      repsOrSec: "reps",
      highestValue: 0,
      rehabLog: [],
    }
  }

  componentWillMount() {
    //this.props.getRehabRecord(this.props.RehabReducers.rehabID);
    let rehabIndex = 0;
    let dataIndex = 0;
    if(this.props.match.params.index && this.props.match.params.dataIndex) {
      rehabIndex = parseInt(this.props.match.params.index, 10);
      dataIndex = parseInt(this.props.match.params.dataIndex, 10);
      this.setState({rehabIndex, dataIndex})
    }
    this.calculateRehabLog(rehabIndex, dataIndex);
  }

  calculateRehabLog = (rehabIndex, dataIndex) => {
    let {rehab} = this.props.RehabReducers;
    let {rehabRecord} = this.props.RehabReducers;
    if(rehab){
        let rehabData = rehab.rehab[rehabIndex].data[dataIndex];
        let rehabCategory = rehab.rehab[rehabIndex].rehab_category;
        let repsOrSec, highestValue, reps;
        let rehabName = rehabData.name;
        let sets = parseInt(rehabData.sets,10)
        console.log("rehabData", rehabData);
        if(rehabData.reps === ""){
          repsOrSec = "Sec";
          let temp = rehabData.time.split('-');
          highestValue = parseInt(temp[temp.length-1], 10);
          reps = rehabData.time+"sec";
        }else{
          repsOrSec = "Reps";
          let temp = rehabData.reps.split('-');
          highestValue = parseInt(temp[temp.length-1], 10);
          reps = rehabData.reps;
        }
        this.setState({
          rehabName, sets, reps, repsOrSec, highestValue, rehabCategory
        })
        if(rehabRecord){
          if(rehabRecord.rehab){
            let rehabIndex = rehabRecord.rehab.findIndex( i => { return (i.rehab_category === rehabCategory) });
            if(rehabIndex >= 0){
              let dataIndex = rehabRecord.rehab[rehabIndex].data.findIndex ( i => { return (i.name === rehabName) });
              if(dataIndex >=0) {
                let rehabLog = rehabRecord.rehab[rehabIndex].data[dataIndex].value;
                this.setState({ rehabLog, currentSets: rehabLog.length + 1 })
              }
            }
          }
        }
      }
    }

  onNextButtonHandler = () => {
    this.setState({rehabLog:[], currentSets: 1, rehabCategory: "", rehabName: "",
                    sets: 0, repsOrSec: "reps", highestValue: 0 })
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

  onCompleteButtonHandler = () => {
    let {rehabRecordID, rehabRecord} = this.props.RehabReducers;
    let {sets, highestValue, repsOrSec, rehabCategory, rehabName} = this.state;
    let rehabLog = [...this.state.rehabLog];
    if(this.state.currentSets === this.state.sets){
    }
    rehabLog.splice((this.state.currentSets-1),1);
    rehabLog.push({data : this.state.highestValue});

    this.props.saveRehabRecord(rehabRecordID, rehabRecord, rehabCategory,rehabName, sets, repsOrSec, highestValue,);
    if(this.state.currentSets === this.state.sets){
      let {rehabID, rehab} = this.props.RehabReducers;
      this.props.completedCurrentRehab(rehabID, rehab, this.state.rehabIndex, this.state.dataIndex);
    }
    this.setState({rehabLog, currentSets: this.state.currentSets+1 })
  }
  onBackButtonHandler = (e) => {
    e.preventDefault();
    this.setState({ goBack: true})
  }

  render() {
    let {rehab, isFetchingRehabRecord} = this.props.RehabReducers;
    if(rehab){
      return(
        <div>
          <RehabExercise
            state = {this.state}
            next = {this.onNextButtonHandler }
            complete = {this.onCompleteButtonHandler}
            back = {this.onBackButtonHandler}
          />
          {isFetchingRehabRecord && (
            <Hoc>
              <Modal modalFor = "modal-for-loading">
                <Loading mode="selectExercise"/>
              </Modal>
            </Hoc>
          )}
          {/* showing loading until data is saved to the database */}
          <div>
              <ActivityIndicator
                toast
                text="Please Wait..."
                animating={this.props.RehabReducers.isUploading}
              />
          </div>
          {this.state.goBack && (
            <Redirect to='/rehab' />
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
    getRehabRecord, saveRehabRecord, completedCurrentRehab
  }, dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps)(RehabExerciseContainer);
