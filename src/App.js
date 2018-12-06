import React from 'react';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RootRouter from './Router';
import theme from './theme';

const App = () => (
  <HashRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RootRouter />
    </MuiThemeProvider>
  </HashRouter>

);

export default App;


// all the data in redux shoule be in the containers instead of components
// or the entry of the applciation
