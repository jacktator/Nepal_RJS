import React from 'react';

import { Button, WingBlank, Card, WhiteSpace } from 'antd-mobile';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ContainedExercises from './containedExercise';
import { Link } from 'react-router-dom';
import Footer from '../Footer'

  class MainRehab extends React.Component {
    state = {
      value: 0,
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render() {
      const { classes } = this.props;
      const { value } = this.state;
      return (
        <div className="container">
          <div className="container-without-button">
            <div className="image-container">
              <img className="image-source" src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="header" />
            </div>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
              style={{width:'100%'}}
            >
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((v, k) => {
                return <Tab disableRipple key={k} label={v} />
              })}
          </Tabs>
            <ContainedExercises rehab={this.props.rehab} />

          </div>

          <div className="footer-button">
            <WingBlank>
              <WingBlank>
                <Button type="primary" onClick={() => this.props.onStartRehab()}>
                  Start your rehab
              </Button>
              </WingBlank>
            </WingBlank>
          </div>
          <Footer />
        </div>//container
      )
    }
  }

export default MainRehab;
