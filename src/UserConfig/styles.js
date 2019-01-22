const styles = theme => ({
  paper: {
    backgroundColor: theme.userCongifPageBackground,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
  },
  gridRoot: {
    height: '100%',
  },
  autoFlex: {
    flex: '1',
  },
  button: {
    fontSize: theme.typography.fontSize * 1.4,
  },
  titile: {
    marginTop: '33vh',
  },
});

export default styles;
