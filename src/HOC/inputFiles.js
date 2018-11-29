import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, TextField, InputAdornment, IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { validation } from './Validation';

const getRandomInt = () => {
  const min = Math.ceil(1);
  const max = Math.floor(10);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

const typeValidation = (type, value, confirm) => {
  if (confirm && (value !== confirm)) {
    return { error: false, resDiscription: 'should same as password' };
  }
  return validation(`${type}`, value);
};

const inputType = {
  email: {
    id: `email${getRandomInt()}`,
    placeholder: 'Example@gmail.com',
    name: 'email',
    adornmentText: 'Email: ',
  },
  password: {
    password: true,
    id: `password${getRandomInt()}`,
    placeholder: 'At least 8 characters',
    name: 'password',
    adornmentText: 'Password: ',
  },
  rePassword: {
    password: true,
    id: `rePassword${getRandomInt()}`,
    placeholder: 'Confirm your password',
    name: 'rePassword',
    adornmentText: 'Confirm: ',
  },
};

const styles = theme => ({
  inputFileLable: {
    color: theme.palette.secondary.main,
  },
  inputFile: {
    '&:before': {
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    '&:hover:not($disabled):not($error):not($focused):before': {
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
  },
  disabled: {},
  error: {},
  focused: {},
  underline: {},
});

class InputFiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  render() {
    const {
      classes, value, onChangeHandle, type, confirm,
    } = this.props;
    const { showPassword } = this.state;
    const { error, resDiscription } = typeValidation(type, value, confirm);
    const {
      id, name, placeholder, adornmentText, password,
    } = inputType[type];
    return (
      <TextField
        id={id}
        style={{ margin: 16 }}
        placeholder={placeholder}
        fullWidth
        type={password && (showPassword ? 'text' : 'password')}
        error={!error}
        name={name}
        helperText={!error && resDiscription}
        onChange={onChangeHandle}
        value={value}
        FormHelperTextProps={{ style: { color: '#f9a49e' } }}
        InputProps={{
          classes: {
            underline: classes.inputFile,
            input: classes.inputFileLable,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Typography variant="h6" component="h6" color="secondary">{adornmentText}</Typography>
            </InputAdornment>),
          endAdornment: password && (
          <InputAdornment position="end">
            <IconButton
              disableTouchRipple
              aria-label="Toggle password visibility"
              onClick={this.handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
          ),
        }}
      />
    );
  }
}

InputFiles.propTypes = {
  classes: PropTypes.object.isRequired,
  confirm: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(InputFiles);
