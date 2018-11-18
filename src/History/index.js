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
      currentPage: 1,
    };
  }

  render() {
    return (
      <MainComponent
        backgroundImage='image/sampleImage.jpeg'
        title='History'
        currentPage={1}
        FooterContent={1}
        midComponent={
            <PlanPage />
        }
      />
    )
  }
}

export default MainRehab;
