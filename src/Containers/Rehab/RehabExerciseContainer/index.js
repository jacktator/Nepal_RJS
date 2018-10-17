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
      rehabIndex: 0
    }
  }
  componentWillMount() {
    this.props.getRehabRecord(this.props.RehabReducers.rehabID);
    let index=0;
    if(this.props.match.params.index) {
      index = parseInt(this.props.match.params.index, 10);
      this.setState({rehabIndex : index})
    }
  }
  onCompleteButtonHander = () => {
    let {rehabRecordID} = this.props.RehabReducers;
    let {rehabRecord} = this.props.RehabReducers;
    this.props.saveRehabRecord(rehabRecordID, rehabRecord);
  }
  render() {
    var days = new Date().getDay();
    console.log(days);
    let {rehab, isFetchingRehabRecord,rehabRecord} = this.props.RehabReducers;
    console.log("rehab_record",rehabRecord);
    if(rehab){
      return(
        <div>
          <RehabExercise
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
