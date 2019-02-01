// eslint-disable-next-line import/prefer-default-export
export const styles = theme => ({
  container: {
    height: '100vh',
    width: '100vw',
  },
  containerGrid: {
    minHeight: '100%',
  },
  top: {
    height: '32vh',
    backgroundSize: 'cover',
  },
  mid: {
    flex: '1',
    backgroundColor: 'white',
  },
  bottom: {
    backgroundColor: 'blue',
  },
  topInline: {
    backgroundColor: 'rgba(224,247,250, 0.2)',
    paddingLeft: '10%',
    paddingBottom: '20%',
    paddingTop: '5%',
  },
  menuButton: {
    width: 'fit-content',
    padding: '0',
    color: 'white',
  },
  title: {
    color: 'white',
    marginLeft: '4vw',
    height: '60%',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  header_description: {
    color: 'white',
  },
  midWithBotton: {
    height: '65vh',
    width: '100%',
  },
  midWithoutBotton: {
    height: '70vh',
    width: '100%',
  },
  bottomWithBotton: {
    height: '12vh',
    width: '100%',
  },
  bottomWithoutBotton: {
    height: '7vh',
    width: '100%',
  },
  progress: {
    marginTop: '5px',
    width: '100%',
  },
  footerPaper: {
    width: '100%',
  },
  footerNav: {
    width: '100%',
    backgroundColor: theme.footer.backgroundColor,
  },
  bottomNavigator: {
    '&$selected': {
      color: theme.palette.primary.main,
    },
  },
  selected: {},
  progressBar: {
    width: '90%',
    height: '0.5vh',

  },
  progressData: {
    marginTop: '40px',
  },
});
