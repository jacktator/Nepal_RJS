import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, ActivityIndicator} from 'antd-mobile';
import {Redirect} from 'react-router';

import {addPostureCorrection, addInjuryManagement, prepareRehabData} from '../actions';
import InjuryManagement from '../../../Components/Questionnaire/InjuryManagement';
import PostureCorrection from '../../../Components/Questionnaire/PostureCorrection';
import Modal from '../../../Components/UI/Modal';
import RehabModal from '../../../Components/Questionnaire/Popup/RehabModal';
import {postureCorrectionArray, injuryManagementArray} from '../../DataSources/AllArrays';
class WeeklyQuestionnaireContainer extends Component{
  state = {
    rehabTypeForModal: '',
    dataForModal: { },
    modal: false,
  }
  //Display Modal
  showModal = (data, type) => {
    this.setState({ rehabTypeForModal: type, dataForModal:data, modal:true});
  }
  cancelModalHandler = () => {
    this.setState({ modal: false })
  }
  addInjuryManagement = (value) => {
    this.cancelModalHandler();
    this.props.addInjuryManagement(value);
  }
  addPostureCorrection = (value) => {
    this.cancelModalHandler();
    this.props.addPostureCorrection(value);
  }
  onSubmitButtonHandler= () => {
    let {injury_management, posture_correction} = this.props.RehabReducers;
    if(!injury_management || !posture_correction){
      alert("Please select both values before you submit. Thank you");
    }else{
      this.props.prepareRehabData(injury_management.toString(), posture_correction.toString());
    }

  }
  render(){
    let {injury_management, posture_correction, redirectToWeeklyQuestionnaire, isUploading} = this.props.RehabReducers;
    if(!redirectToWeeklyQuestionnaire){
      return(
        <Redirect to="/rehab" />
      )
    }
    return(
      <div>
        <br/><br/>
        <h2 style={{textAlign: 'center'}}>Rehab Focus Questionnaire</h2>
        <br/><br/>
        <InjuryManagement
          selectInjuryManagement={this.props.addInjuryManagement}
          data= {injuryManagementArray}
          fields = {injury_management}
          heading = {""}
          title = {"What do your current rehab focus for injury management?"}
          showModal = {this.showModal}
        />
        <PostureCorrection
          data = {postureCorrectionArray}
          fields = {posture_correction}
          heading = {""}
          title = {"What is your current rehab focus for posture correction?"}
          selectPostureCorrection={this.props.addPostureCorrection}
          showModal = {this.showModal}
        />
        <br/>
        <Button type="primary" onClick ={()=> this.onSubmitButtonHandler()}> Submit </Button>

          {(this.state.modal) && (
              <Modal modalFor = "modal">
                <RehabModal
                  data = {this.state.dataForModal}
                  type = {this.state.rehabTypeForModal}
                  cancel = {this.cancelModalHandler}
                  select = {this.state.rehabTypeForModal === 'forPosture'? this.addPostureCorrection: this.addInjuryManagement }
                />
              </Modal>
          )}

          <div>
              <ActivityIndicator
                toast
                text="Please Wait..."
                animating={isUploading}
              />
          </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    RehabReducers: state.RehabReducers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addInjuryManagement, addPostureCorrection, prepareRehabData
  }, dispatch
);
}
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyQuestionnaireContainer);
