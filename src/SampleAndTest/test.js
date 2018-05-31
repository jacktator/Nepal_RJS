import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../Actions/FirstAction';

//container is for bind the redux data and components(display) together

class Test extends Component {
  constructor(props){
    super(props);
    this.getList = this.getList.bind(this);
  }

  getList(){
    return this.props.users.map((user) =>
    <p key={user.id} onClick={()=> this.props.selectUser(user.id)}>
    {user.first} {user.last}
    </p>);
  }

  render(){
    return(
      <div>
        {this.getList()}
      </div>
    );
  }
}

//funtion used to output the statement, ()is necessary
//if the function is used to in the action, like onClink=this.function, the () is disappeared

function mapStateToProps(state){
  return {
    users: state.Users,
  }
}
//here is for calling the action passing through the reducx, so data in the redux can be used in the action

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Test);
