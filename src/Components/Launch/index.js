import React, { Component } from 'react';
import { Button, WingBlank} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './Launch.css';
import Logo from '../../Assets/Logo.png';



class Launch extends Component {

  render() {
    return (
      <div className="launch">
      <div className="screen-launch-style">
         {/* logo block*/}
        <div className="logo-launch-position">
              <img src={Logo} className="logo"/>
        </div>
           {/* button block. */}
           <WingBlank>
              <Link to='login'>
                <Button type="primary" style={{backgroundColor: '#4CA0CC'}}>Get Started</Button>
              </Link>
            </WingBlank>
          <div className='copyright'>Copyright @ 2018 Nepal</div>
      </div>
      </div>
    );
  }
}


 export default Launch;

// onClick={this.props.loadColor}  style={{backgroundColor: `${this.props.testState.color}`}
