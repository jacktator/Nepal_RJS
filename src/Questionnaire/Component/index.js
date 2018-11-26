import React from 'react';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Fifth from './pages/Fifth';
import Sixth from './pages/Sixth';
import Seventh from './pages/Seventh';

const renderComponent = (props) => {
  const { activeStep, handleClickOpen } = props;
  const components = {
    0: <First handleClickOpen={handleClickOpen} />,
    1: <Second handleClickOpen={handleClickOpen} />,
    2: <Third handleClickOpen={handleClickOpen} />,
    3: <Fourth handleClickOpen={handleClickOpen} />,
    4: <Fifth handleClickOpen={handleClickOpen} />,
    5: <Sixth handleClickOpen={handleClickOpen} />,
    6: <Seventh handleClickOpen={handleClickOpen} />,
  };
  return components[activeStep];
};

export default renderComponent;
