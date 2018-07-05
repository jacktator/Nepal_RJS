import React, {Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './Excercise.css';
import RecordList from './RecordList.js';
import VideoDetail from './VideoDetail.js';
import WeightAndRep from './WeightAndRep.js';

export default class Excercise extends Component{

  onLeftClick(e){
    e.preventDefault();
    console.log('onLeftClick')
  }

  render(){
    return(
      <div className="excercise">
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={(e) => this.onLeftClick(e)}
            rightContent={[
              <Icon key="1" type="ellipsis" />,
            ]}
          >
          Excercise number/number
          </NavBar>
        </div>
        <div className="excercise-iframe">
          <VideoDetail videos={this.props.videos}/>
        </div>
        <div>
          <WeightAndRep/>
        </div>
        <div className="excercise-recordlist">
          <RecordList/>
        </div>
      </div>
    );
  }
}
