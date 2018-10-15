import React, {Component} from 'react';
import {fetchRehab} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MainRehab from '../../../Components/Rehab/MainRehab/index';
import Hoc from '../../../HOC/Hoc';
import Loading from '../../../Components/Loading';

class MainRehabContainer extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.fetchRehab();
  }

  onStartRehabButtonHandler = () => {
    alert("on Start button clicked");
  }

  onChangeButtonHandler = () => {
    alert("on change button clicked")
  }
  render(){
    let {isInitializing, rehab} = this.props.RehabReducers;
    if(!isInitializing && rehab){
      return(
        <div>
          <MainRehab
            rehab = {rehab.rehab}
            onStartRehab={this.onStartRehabButtonHandler}
            onChange={this.onChangeButtonHandler}
          />
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
      fetchRehab
    },dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainRehabContainer);
