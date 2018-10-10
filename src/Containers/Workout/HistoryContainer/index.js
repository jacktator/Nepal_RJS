// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getHistory,removeError} from './action';
import FooterContainer from'../FooterContainer';
import Header from '../../../Components/Workout/History/Header'
import HistoryComponent from '../../../Components/Workout/History';
import Hoc from '../../../HOC/Hoc';
import Modal from '../../../Components/UI/Modal';
import ShowError from '../../../Components/Error/ShowError'

class HistoryContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      daySelect: 1,
      weekSelect: 1,
      currentPage: 1,
      loading:true,
    }
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'historyTab' ){
      this.props.selectFooter('historyTab');
    }
  }
  componentDidMount(){
    this.props.getHistory().then(()=>{
      this.setState({
        loading:false
      })
    });
  }
  cancelErrorMessageHandler = () => {
    this.props.removeError();
  }
  // onListProgramClickHandler = (e) => {

  //     e.preventDefault();
  //     // let currentHistoryIndex = this.state.history.findIndex( data =>{ return data.program === program});
  //     this.setState({
  //       currentPage: this.state.currentPage+1,
  //     })
  // }
  // onParticularWeekClickedHandler = (e, week) => {
  //   this.setState({
  //     weekSelect: e,
  //     week:this.state.weekSelect+1
  //   })
  // }
  // onParticularDayClickedHandler =(e,day) => {
  //   // e.preventDefault();
  //   this.setState({
  //     currentPage: this.state.currentPage + 1,
  //     day: this.state.daySelect+1,
  //     daySelect:e
  //   })
  // }

  render() {
    let RenderPage = null;
    let {history,error} =this.props.HistoryReducers;
    console.log(error)

    if(this.state.currentPage === 1){
      RenderPage = (
        <HistoryComponent
          history = {history}
          loading={this.state.loading}
        />
      )
      }
    return (
      <Hoc>
        <Header/>
        {RenderPage}
        <FooterContainer currentPath='history'/>
        {(error.hasError) && (
          <Modal modalFor='modal'>
              <ShowError
                error={error.message}
                cancel={this.cancelErrorMessageHandler}/>
          </Modal>
        )}
      </Hoc>
    )
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    HistoryReducers: state.HistoryReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter,
    getHistory,
    removeError
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps)(HistoryContainer)
