// @flow
import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import './Launch.css';
import Logo from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';

class Launch extends Component {
  render() {

    return (

      <div className="launch-container">
         {/* logo block*/}
        <div className="logo-launch-position">
          <img src={Logo} className="logo" alt="logo"/>
        </div>
           {/* button block. */}
        <div className='launch-button'>
          <WingBlank>
            <Link to="/login">
              <button className="customizedButton-Blue" >
                Get Started
              </button>
            </Link>

          </WingBlank>
          <WhiteSpace size='lg'/>
          <div className='copyright'>
            Copyright @ 2018 Nepal
          </div>
        </div>
      </div>
    );
  }
}

export default Launch;

// onClick={this.props.loadColor}  style={{backgroundColor: `${this.props.testState.color}`}
