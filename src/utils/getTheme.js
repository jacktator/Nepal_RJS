import { createMuiTheme } from '@material-ui/core/styles';
import axios from "axios";
import {API_AM, SALES_HOME} from "../config";
import {getCompany} from "./getCompany";

const defaultTheme = {
  palette: {
    primary: {
      light: '#222D65',
      main: '#222D65',
      dark: '#222D65',
      contrastText: '#00bcd4',
    },
    secondary: {
      light: '#e0f7fa',
      main: '#e0f7fa',
      dark: '#222D65',
      contrastText: '#00bcd4',
    },
    text: {
      primary: '#222D65',
      secondary: 'rgba(34, 45, 101, 0.5)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  burgerBar: { rootColor: 'white', childColor: 'white' },
  splashPageBackground: {
    color: 'white',
  },
  userCongifPageBackground: {
    color: 'white',
  },
  questionnaireBackground: {
    color: 'white',
  },
  profileBackground: {
    color: 'white',
  },
  headerTheme: {
    color: 'white',
  },
  ListItem: {
    backgroundColor: 'white',
  },
  midPartNavigator: {
    backgroundColor: 'white',
  },
  footer: {
    backgroundColor: 'white',
  },
  appBar: {
    backgroundColor: 'white',
  },
  mainMenu: {
    fontColor: 'darkcyan',
    workout: {
      color: 'rgb(0,96,100)',
      opacity: 0.5,
    },
    profile: {
      color: 'rgb(111,249,255)',
      opacity: 0.4,
    },
    question: {
      color: 'rgb(38,198,218)',
      opacity: 0.3,
    },
    rehab: {
      color: 'rgb(86,200,216)',
      opacity: 0.5,
    },
    content: {
      color: 'rgb(0,172,193)',
      opacity: 0.4,
    },
    FAQ: {
      color: 'rgb(136,255,255)',
      opacity: 0.3,
    },
  },
  workoutHeader: {
    plan: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
    exercises: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
    daily: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
    history: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
  },
  rehabHeader: {
    daily: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
    exercises: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
  },
  logo: 'https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png',
  typography: {
    useNextVariants: true,
  },
  profile: {
    backgroundImage: 'https://am.sk8.tech/wp-content/uploads/2019/01/sampleImage.jpeg',
    button: { color: 'white' },
  },
};

export const getDefaultTheme = createMuiTheme(defaultTheme);

const THEME_KEY = "theme";

const localThemeString = localStorage.getItem(THEME_KEY);

export const getLocalTheme = () => localThemeString ? createMuiTheme(JSON.parse(localThemeString)) : null;

const setLocalTheme = (themeJson) => localStorage.setItem(THEME_KEY, JSON.stringify(themeJson));

export const createMUITheme = (themeJson) => {
  const m = (typeof themeJson === 'string') ? JSON.parse(themeJson) : themeJson;
  return createMuiTheme(m);
};

const company = getCompany();
export const getRemoteTheme = (callback) => {
  axios.get(`${API_AM}/theme/${company}`)
    .then(
      (res) => {
        console.log('Company Theme Loaded: ', company);
        const themeJson = res.data;
        setLocalTheme(themeJson);
        callback(createMUITheme(themeJson));
      },
    )
    .catch(
      (err) => {
        console.log('Default Theme Loaded: ', company);
        console.error(err);
        window.location.href = SALES_HOME;
        // callback(defaultTheme);
      },
    );
};
