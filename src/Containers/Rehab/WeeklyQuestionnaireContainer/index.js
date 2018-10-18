import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPostureCorrection, addInjuryManagement} from '../actions';
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
  render(){
    let {injury_management, posture_correction} = this.props.RehabReducers;
    console.log("injury", injury_management);
    console.log("posture", posture_correction);
    return(
      <div>
      <InjuryManagement
        selectInjuryManagement={this.props.addInjuryManagement}
        data= {injuryManagementArray}
        fields = {injury_management}
        showModal = {this.showModal}
      />
      <PostureCorrection
        data = {postureCorrectionArray}
        fields = {posture_correction}
        selectPostureCorrection={this.props.addPostureCorrection}
        showModal = {this.showModal}
      />
        This is weekly rehab questionnaire

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
    addInjuryManagement, addPostureCorrection
  }, dispatch
);
}
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyQuestionnaireContainer);
