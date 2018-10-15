import React, {Component} from 'react';
import {ActivityIndicator} from 'antd-mobile';
import {fetchRehab, fetchRehabList, selectRehab, removeError} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
      isChangeRehab: false,
      rehabIndex: null,
      dataIndex: null,
    }
  }
  componentWillMount(){
    this.props.fetchRehab();
  }

  onStartRehabButtonHandler = () => {
    alert("on Start button clicked");
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
    let {isInitializing, rehab} = this.props.RehabReducers;
    if(!isInitializing && rehab){
      return(
        <div>
          <MainRehab
            rehab = {rehab.rehab}
            onStartRehab={this.onStartRehabButtonHandler}
            onChange={this.onChangeButtonHandler}
          />
          <div>
              <ActivityIndicator
                toast
                text="Please Wait..."
                animating={this.props.RehabReducers.isUploading}
              />
          </div>
          {(error.hasError) && (
            <Modal modalFor='modal'>
              <ShowError
               error={error.message}
               cancel={this.cancelErrorMessageHandler}/>
            </Modal>
          )}
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
        <Hoc>
          <Loading />
        </Hoc>
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
