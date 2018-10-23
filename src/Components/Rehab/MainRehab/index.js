import React from 'react';

import { WingBlank } from 'antd-mobile';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ContainedExercises from './containedExercise';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ClanderIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContentIcon from '@material-ui/icons/AssessmentOutlined';
import TrainingIcon from '@material-ui/icons/FitnessCenterOutlined';
import Button from '@material-ui/core/Button';
import MainComponent from '../../HOC';
import MidComponent from '../../HOC/MidPart';
import Footer from '../Footer'

const FooterContent = [
  { label: 'Home', to: '/mainmenu', Icon: <HomeIcon /> },
  { label: 'Information', to: '/mainmenu', Icon: <ClanderIcon /> },
  { label: 'Content', to: '/mainmenu', Icon: <ContentIcon /> },
  { label: 'Training', to: '/rehab', Icon: <TrainingIcon /> },
]

const tapBarContent = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

const MidPartComponentContent = () => (
  <div className="container">
    <div className="container-without-button">
      <div className="image-container">
        <img className="image-source" src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="header" />
      </div>
      <Tabs
        value={1}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        scrollButtons="auto"
        style={{ width: '100%' }}
      >
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((v, k) => {
          return <Tab disableRipple key={k} label={v} />
        })}
      </Tabs>
      <ContainedExercises rehab={this.props.rehab} onChange={this.props.onChange} />

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

class MainRehab extends React.Component {
  state = {
    value: 0,
    midPartTabsValue: 0,
  };

  midPartTabsValueHandleChange = (event, value) => {
    this.setState({ midPartTabsValue: value });
  };

  render() {
    const { value } = this.state;
    return (
      <MainComponent
        backgroundImage='image/sampleImage.jpeg'
        title='Rehab'
        FooterContent={FooterContent}
        showBottomButton
        FooterButtonClick = {this.props.onStartRehab}
        midComponent={
          <div >
            <MidComponent
              midPartTabsValue={this.state.midPartTabsValue}
              handleChange={this.midPartTabsValueHandleChange}
              tapBarContent={tapBarContent}
            />
            <ContainedExercises rehab={this.props.rehab} onChange={this.props.onChange} />
          </div>
        }
      />
    )
  }
}

export default MainRehab;
