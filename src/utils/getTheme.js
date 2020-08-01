import { createMuiTheme } from '@material-ui/core/styles';
import axios from "axios";
import {API_AM, SALES_HOME} from "../config";
import {getCompany} from "./getCompany";
import defaultTheme from './defaultTheme.json';

export const getDefaultTheme = createMuiTheme(defaultTheme);

const THEME_KEY = "theme";
// const localTheme = "paypal";
const localTheme = "atlassian";

const localThemeString = sessionStorage.getItem(THEME_KEY);

export const getLocalTheme = () => localThemeString ? createMuiTheme(JSON.parse(localThemeString)) : null;

const setLocalTheme = (themeJson) => sessionStorage.setItem(THEME_KEY, JSON.stringify(themeJson));

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
