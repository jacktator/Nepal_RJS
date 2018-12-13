const styles = theme => ({
  paper: {
    backgroundColor: '#f5f5f6',
    border: `2px solid ${theme.palette.primary.main}`,
    width: '90%',
    overflowY: 'scroll',
    height: '94%',
  },
  container: {
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#e1e2e1',
    overflowY: 'hidden',
  },
  rootGrid: {
    height: '100%',
  },
  topGrid: {
    flex: 1,
  },
  bottomGrid: {
    height: '6vh',
  },
  mobileStepper: {
    background: 'none',
    width: '100%',
  },
  group: {
    width: '100%',
  },
  inputColor: {
    color: theme.palette.primary.main,
  },
  selectMenu: {
    backgroundColor: 'black',
    height: '10vh',
    overflowY: 'scroll',
  },
  formControl: {
    width: '100%',
  },
  helpText: {
    textAlign: 'center',
    marginTop: '0',
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

export default styles;
