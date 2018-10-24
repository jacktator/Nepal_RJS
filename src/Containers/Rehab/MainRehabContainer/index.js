import React, {Component} from 'react';
import {ActivityIndicator} from 'antd-mobile';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchRehab, fetchRehabList, selectRehab, removeError} from '../actions';
import MainRehab from '../../../Components/Rehab/MainRehab';
import ShowError from '../../../Components/Error/ShowError';
import SelectRehab from '../../../Components/Rehab/SelectRehab';
import Hoc from '../../../HOC/Hoc';
import Loading from '../../../Components/Loading';
import Modal from '../../../Components/UI/Modal';

class MainRehabContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isStartRehab: false,
      isChangeRehab: false,
      rehabIndex: null,
      dataIndex: null,
    }
  }
  componentWillMount(){
    this.props.fetchRehab();
  }

  onStartRehabButtonHandler = () => {
    this.setState({isStartRehab: true})
  }

  onChangeButtonHandler = (category, type, rehabIndex,dataIndex) => {
    this.setState({ isChangeRehab: true, rehabIndex, dataIndex})
    this.props.fetchRehabList(category, type);
  }

  onSelectRehabHandler = (selectedRehab) => {
    console.log(selectedRehab);
    let {rehab, rehabID} = this.props.RehabReducers;
    this.props.selectRehab(rehabID,rehab.rehab, selectedRehab, this.state.rehabIndex, this.state.dataIndex)
    this.setState({ isChangeRehab: false})
  }
  onCancelRehabHandler = () => {
      this.setState({ isChangeRehab: false})
  }
  cancelErrorMessageHandler =() => {
    console.log("cancel");
    this.props.removeError();
  }
  render(){
    const {error} =this.props.RehabReducers;
    console.log("Rehab Reducres",this.props.RehabReducers);
    let {rehab, isInitializing, redirectToWeeklyQuestionnaire} = this.props.RehabReducers;
    if(this.props.RehabReducers.previousRehabRecord){
      console.log("we have previouse rehab record");
    }
    if(redirectToWeeklyQuestionnaire){
      return(
        <Redirect to="/weekly-rehab-questionaire" />
      )
    }else if(!isInitializing && rehab){
      return(
        <div>
          <MainRehab
            rehab = {rehab.rehab}
            onStartRehab={this.onStartRehabButtonHandler}
            onChange={this.onChangeButtonHandler}
          />
        {/* showing loading until data is saved to the database */}
          <div>
              <ActivityIndicator
                toast
                text="Please Wait..."
                animating={this.props.RehabReducers.isUploading}
              />
          </div>
          {/* pop up the error message when got the error */}
          {(error.hasError) && (
            <Modal modalFor='modal'>
              <ShowError
               error={error.message}
               cancel={this.cancelErrorMessageHandler}/>
            </Modal>
          )}
          {/* redirect to rehab-exercise page when user clicks start rehab button */}
          {(this.state.isStartRehab) && (
            <Redirect to="/rehab-exercise" />
          )}
          {( redirectToWeeklyQuestionnaire) && (
            <Redirect to="/weekly-rehab-questionaire" />
          )}
          {/* loads change rehab page when user click change rehab button */}
          {(this.state.isChangeRehab) && (
            <Modal modalFor = "modal-for-select-exercise">
              <SelectRehab
                onSelect = {this.onSelectRehabHandler}
                rehabList = {this.props.RehabReducers.rehabList}
                onCancel = {this.onCancelRehabHandler}
              />
            </Modal>
          )}
        </div>
      )
    }else{
      return(
          <Loading />
      )
    }

  }
}
function mapStateToProps(state){
  return {
    RehabReducers: state.RehabReducers
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      fetchRehab, fetchRehabList, selectRehab, removeError
    },dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainRehabContainer);
