import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DropdownIcon from '@material-ui/icons/ArrowDropDown';

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    height: '40vh',
    overflowY: 'scroll',
  },
  inlineText: {
    borderBottom: '1px solid #eeeeee',
    lineHeight: '5vh',
    height: '5vh',
  },
  inputFile: {
    '&:before': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      '@media (hover: none)': {
        borderBottom: `1px solid ${theme.palette.primary.main} `,
      },
    },
  },
  disabled: {},
  focused: {},
  error: {},
});

class SwipeableTemporaryDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleDrawer(side, open) {
    return () => {
      this.setState({
        [side]: open,
      });
    };
  }

  handleClick(v) {
    const { onChange, id } = this.props;
    onChange({ target: { name: id, value: v } });
  }

  render() {
    const {
      classes, content, id, unit, label, value, profile,
    } = this.props;
    const { bottom } = this.state;

    const fullList = arr => (
      <div className={classes.fullList}>
        {!!arr && arr.map(text => (
          <Typography
            className={classes.inlineText}
            align="center"
            key={text}
            onClick={() => this.handleClick(text)}
            variant="body1"
            component="h6"
          >
            {text}
          </Typography>
        ))}
      </div>
    );

    return (
      <div>
        <TextField
          id={id}
          placeholder={unit}
          fullWidth
          value={value}
          onClick={this.toggleDrawer('bottom', true)}
          InputProps={{
            style: { height: profile ? '16vmin' : 'unset' },
            inputProps: { style: { textAlign: 'right' } },
            endAdornment: (
              <InputAdornment position="end">
                <DropdownIcon />
              </InputAdornment>),
            startAdornment: (
              <InputAdornment position="start">
                <Typography variant="body1" component="h6" color="textPrimary">{label && `${label}: `}</Typography>
              </InputAdornment>),
          }}
        />
        <Drawer
          anchor="bottom"
          open={bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList(content)}
          </div>
        </Drawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  unit: PropTypes.string,
  label: PropTypes.string,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
