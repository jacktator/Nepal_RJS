import React, { Component } from 'react';
import { Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Launch.css';
import Logo from '../../Assets/Logo.png';
//=========================================================================

// var colorstyle={
//   color: this.props.testState.color,
// }

var logoStyle = {
  height: 170,
  width: 160,
  justifyContent: 'center',
  alignItems: 'center',
};

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps} style={{alignItems: 'center'}}></div>
);

class Launch extends Component {
  constructor(props){
    super(props);
  }

  testFun =() => {
    console.log(this.props.testState)
  }

  render() {
    return (
      <div className="screen-launch-style">
        <div className="logo-launch-position">
          <WingBlank>
            <Flex align="baseline">
              <Flex.Item ></Flex.Item>
              <img src={Logo}  style={logoStyle} alt="this is a logo"/>
              <Flex.Item ></Flex.Item>
            </Flex>
          </WingBlank>
        </div>
        <div className="launch-getstart-position">
          <WingBlank>
            <Link to='login' >
              <Button type="primary" style={{backgroundColor: '#4CA0CC'}}>Get Started</Button>
            </Link>
            <WhiteSpace/>
            <div>
              <Button type="primary" >test button</Button>
            </div>
          </WingBlank>
        </div>
      </div>
    );
  }
}


 export default Launch;

// onClick={this.props.loadColor}  style={{backgroundColor: `${this.props.testState.color}`}
