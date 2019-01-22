import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62efff',
      main: cyan[600],
      dark: cyan[100],
      contrastText: cyan[500],
    },
    secondary: {
      light: cyan[50],
      main: cyan[50],
      dark: cyan[100],
      contrastText: cyan[500],
    },
    text: {
      primary: cyan[600],
      secondary: cyan[100],
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  splashPageBackground: {
    color: 'white',
  },
  userCongifPageBackground: {
    color: 'white',
  },
  questionnaireBackground: {
    color: 'white',
  },
  headerTheme: {
    color: 'white',
  },
  logo: 'https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png',
  typography: {
    useNextVariants: true,
  },
});

export default theme;
