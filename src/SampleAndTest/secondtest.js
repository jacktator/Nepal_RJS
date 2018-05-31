import React, {Component} from 'react';
import {connect} from 'react-redux';

class SecondTest extends Component{
  render(){
    return(
      <div>
        <h2>{this.props.user.first}{this.props.user.last}</h2>
        <h3>{this.props.user.age}</h3>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.Act
  }
}

export default connect(mapStateToProps)(SecondTest);
