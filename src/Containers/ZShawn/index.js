import React, {Component} from 'react';
import Hoc from '../../HOC/Hoc';
import {connect} from 'react-redux';
import {fetchJson} from './action.js';
import axios from 'axios';


class GetJson extends Component {

  constructor(props){
    super(props);
    this.state={
      jsonString: {},
    }
  }


  getJson(){
    axios.get('./DataSources/fatlossday3.json')
    .then((response)=>{
      console.log(response.data)
      this.setState({jsonString:response.data})
    })
    .catch((error)=>{
      console.log('not working')
    })
  }

  render(){
    console.log(this.state.jsonString.exercises)
    return(
      <Hoc>
        <button onClick={()=>this.getJson()} style={{color: 'red'}}> testing </button>
        <br/>
        {this.state.jsonString.exercises && this.state.jsonString.exercises.map((data, key)=>{
          return(
            <div key={key}>
              <li> {data.day}</li>
            </div>
          )
        })}
      </Hoc>
    )
  }
}

export default connect(null,{fetchJson})(GetJson);
