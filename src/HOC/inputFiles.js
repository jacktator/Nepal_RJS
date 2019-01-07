import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
  if (type === 'number') {
    return { error: false, resDiscription: '' };
  }
  return validation(`${type}`, value);
};

const inputType = {
  number: {
    id: `number${getRandomInt()}`,
    placeholder: '',
    name: 'number',
    adornmentText: '',
  },
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
  inputFileLablePrimary: {
    color: theme.palette.primary.main,
  },
  inputFilePrimary: {
    '&:before': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    '&:hover:not($disabled):not($error):not($focused):before': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
  inputFileLableSecondary: {
    color: theme.palette.secondary.main,
  },
  inputFileSecondary: {
    '&:before': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    '&:hover:not($disabled):not($error):not($focused):before': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
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
      classes, value, onChangeHandle, type, confirm, light, number, fullwidth,
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
        fullWidth={fullwidth}
        type={number ? 'text' : (password && (showPassword ? 'text' : 'password'))}
        error={!number && !error}
        name={name}
        helperText={!number && (!error && resDiscription)}
        onChange={onChangeHandle || null}
        value={value}
        FormHelperTextProps={{ style: { color: '#f9a49e' } }}
        InputProps={{
          classes: light ? {
            underline: classes.inputFilePrimary,
            input: classes.inputFileLablePrimary,
          } : {
            underline: classes.inputFileSecondary,
            input: classes.inputFileLableSecondary,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Typography variant="h6" component="h6" color="secondary">{adornmentText}</Typography>
            </InputAdornment>
          ),
          endAdornment: password && (
          <InputAdornment position="end">
            <IconButton

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
  light: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func,
  type: PropTypes.string.isRequired,
  number: PropTypes.bool,
  fullwidth: PropTypes.bool,
};

export default withStyles(styles)(InputFiles);
