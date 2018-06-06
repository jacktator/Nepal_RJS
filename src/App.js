import React, { Component } from 'react';
import Root from './Components/Root/';
import Test from './SampleAndTest/test';
import SecondTest from './SampleAndTest/secondtest';

class App extends Component {
  render() {
    return (
      <div>
        <Root/>
      </div>
    );
  }
}
export default App;


// all the data in redux shoule be in the containers instead of components
// or the entry of the applciation
