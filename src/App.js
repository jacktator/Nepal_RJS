import React from 'react';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RootRouter from './Router';

const App = props => (
  <HashRouter>
    <MuiThemeProvider theme={props.themeRendered}>
      <CssBaseline />
      <RootRouter />
    </MuiThemeProvider>
  </HashRouter>

);

export default App;


// all the data in redux shoule be in the containers instead of components
// or the entry of the applciation
