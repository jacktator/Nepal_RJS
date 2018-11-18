import React from 'react';
import MainComponent from '../Components/HOC';
import MidComponent from '../Components/HOC/MidPart';
import PlanPage from './Component/PlanPage';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

class MainRehab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      midPartTabsValue: 0,
      currentPage: 2,
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
  }
  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  };

  render() {
    return (
      <MainComponent
        backgroundImage='image/sampleImage.jpeg'
        title={'Workout'}
        showProgress
        progress={this.props.progress}
        currentWeek={this.props.currentWeek}
        currentPage={2}
        FooterContent={1}
        midComponent={
          <div>
            <MidComponent
              midPartTabsValue={this.state.midPartTabsValue}
              handleChange={this.midPartTabsValueHandleChange}
              tapBarContent={tapBarContent}
            />
            <PlanPage/>
          </div>
        }
      />
    )
  }
}

export default MainRehab;
