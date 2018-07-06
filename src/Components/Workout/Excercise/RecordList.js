import React, {Component} from 'react';

export default class RecordList extends Component{
  constructor(props){
    super(props);
    this.state={
      data: [
        'aaaaaa', 'bbbbbb', 'cccccc',
      ]
    }
  }

  render(){
    const list = this.state.data.map((data)=>{
      return(
        <div>
          <p>{data}</p>
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
