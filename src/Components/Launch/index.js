import React, { Component } from 'react';
import { Button, WingBlank, Flex, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Launch.css';
import Logo from '../../assets/Logo.png';
//=========================================================================
import {connect} from 'react-redux';
import {loadColor} from '../../Actions/';
import {bindActionCreators} from 'redux';

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
              <Button type="primary" onClick={this.props.loadColor}  style={{backgroundColor: `${this.props.testState.color}`}}>test button</Button>
            </div>
          </WingBlank>
        </div>
      </div>
    );
  }
}

 function mapStateToProps(state){
    return {
      testState: state.Test,
    }
 }

 function matchDispatchToProps(dispatch){
   return bindActionCreators({loadColor: loadColor}, dispatch);
 }
// return bindActionCreators({
//   loadColor: (ele)=> dispatch(loadColor(ele)),
// });

 export default connect(mapStateToProps, matchDispatchToProps)(Launch);
