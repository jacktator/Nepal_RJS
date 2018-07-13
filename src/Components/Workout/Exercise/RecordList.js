import React, {Component} from 'react';
import {WhiteSpace, Icon} from 'antd-mobile';


export default class RecordList extends Component{
  constructor(props){
    super(props);
    this.state={
      data: [
        {reps:10, kgs: 10},
        {reps:10, kgs: 10},
        {reps:10, kgs: 10}

      ]
    }
  }

  render(){
    const list = this.state.data.map((data, key)=>{
      return(
        <div key={key}>
        { key ===0 && (
          <div >
          <span style={{float:'left', marginLeft:'20px'}}>
            <Icon type="check-circle"/>
          </span>
          <span style={{float:'left', marginLeft: '45px'}}>
            <strong> {data.kgs} kgs * {data.reps} reps </strong>
          </span>
          <span style={{float: 'right', marginRight: '5px'}}>
            <img src={require('../../../Assets/Workout/cup-icon.png')} height="35px" width="40px" alt="cup"/>
          </span>
          <WhiteSpace type='xl'/><WhiteSpace type='xl'/>
          <br />
          </div>
        )}
        { key !==0 && (
          <div>
          <span style={{float:'left', marginLeft:'20px'}}>
            {key+1}
          </span>
          <span style={{float:'left', marginLeft: '55px'}}>
            {data.kgs} kgs * {data.reps} reps
          </span>
          <span style={{float: 'right', marginRight: '5px'}}>
            previous
          </span>
          <WhiteSpace />
          <br />
          </div>
        )}

        </div>
      )
    });
    return(
      <div>
        {list}
      </div>
    );
  }
}
