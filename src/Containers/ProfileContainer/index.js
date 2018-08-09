import React, {Component} from 'react';
import Profile from '../../Components/Profile'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addName, addBirthDate, addHeight, addWeight }from './actions';

class ProfileContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'Laxman',
      birthDate: new Date("1995-01-01"),
    }
  }

  render () {
    const heightArray = ArrtoObj(20, 300, "length");
    const weightArray = ArrtoObj(20, 300, "weight");
    const {fields} = this.props.ProfileReducers;

    return (
      <div>
        <Profile
          fields={fields}
          name = {this.state.name}
          birthDate = {this.state.birthDate}
          heightArray={heightArray}
          weightArray={weightArray}
          selectWeight={this.props.addWeight}
          /*selectName = {this.props.addName}
          selectBirthDate = {this.props.addBirthDate}
          selectHeight = {this.props.addHeight}*/
          />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ProfileReducers: state.ProfileReducers,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addWeight,
  }, dispatch
);
}


// initialise array, decide on the unit.
function ArrtoObj(RangeFrom: int, RangeTo: int, unit: string) {
  var returnArray = [];
  if (unit === "length") {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " cm"})
    };
  } else if (unit === "weight") {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " kg"})
    };
  } else {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i})
    };
  }
  return returnArray;
}

export default connect (mapStateToProps, matchDispatchToProps)(ProfileContainer);
