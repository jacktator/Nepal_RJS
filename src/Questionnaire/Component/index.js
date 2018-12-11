import React from 'react';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Fifth from './pages/Fifth';
import Sixth from './pages/Sixth';
import Seventh from './pages/Seventh';

const renderComponent = (props) => {
  const {
    activeStep, handleClickOpen, data, handleChangeState,
  } = props;
  const {
    first, second, third, fourth, fifth, sixth, seventh,
  } = data;

  const components = {
    0: <First data={first} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
    1: <Second data={second} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
    2: <Third data={third} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
    3: <Fourth data={fourth} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
    4: <Fifth data={fifth} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
    5: <Sixth data={sixth} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
    6: <Seventh data={seventh} handleChangeState={handleChangeState} handleClickOpen={handleClickOpen} />,
  };
  return components[activeStep];
};

export default renderComponent;
