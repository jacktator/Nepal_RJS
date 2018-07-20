// @flow
import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace} from 'antd-mobile';
import {Link, Redirect} from 'react-router-dom';
import './Launch.css';
import Logo from '../../Assets/Logo.png';

class Launch extends Component {
  state = {
    getStarted: false
  }

buttonClickHandler = () => {
  this.setState({getStarted: true});
    // <Link to='login'></Link>
}
  render() {

    return (

      <div className="launch-container">
         {/* logo block*/}
        <div className="logo-launch-position">
          <img src={Logo} className="logo"/>
        </div>
           {/* button block. */}
        <div className='launch-button'>
          <WingBlank>
              <Button type="primary" onClick={()=> this.buttonClickHandler()}style={{backgroundColor: '#4CA0CC'}}>
                Get Started
              </Button>

          </WingBlank>
          <WhiteSpace size='lg'/>
          <div className='copyright'>
            Copyright @ 2018 Nepal
          </div>
        </div>
        {this.state.getStarted &&
          <Redirect to='login' />
        }
      </div>
    );
  }
}

export default Launch;

// onClick={this.props.loadColor}  style={{backgroundColor: `${this.props.testState.color}`}
