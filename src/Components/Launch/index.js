import React, { Component } from 'react';
import { Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Launch.css';
import Logo from '../../Assets/Logo.png';



class Launch extends Component {

  render() {
    return (
      <div className="launch">
      <div className="screen-launch-style">
        <div className="logo-launch-position">
              <img src={Logo} className="logo" alt="this is a logo"/>
        </div>
        <div className="launch-getstart-position">
          <WingBlank>
            <Link to='login'>
              <Button type="primary" style={{backgroundColor: '#4CA0CC'}}>Get Started</Button>
            </Link>
            <WhiteSpace/>
          </WingBlank>
        </div>
      </div>
      </div>
    );
  }
}


 export default Launch;

// onClick={this.props.loadColor}  style={{backgroundColor: `${this.props.testState.color}`}
