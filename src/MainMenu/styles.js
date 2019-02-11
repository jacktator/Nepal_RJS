const styles = ({
  card: {
    boxShadow: 'unset',
    borderRadius: '0',
    borderWidth: '1px 1px 1px 1px',
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: '#489fce',
  },
  CardContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
    overflowY: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  topGrid: {
    height: '15vh',
    borderBottom: '1px solid darkgrey',
  },
  background: {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url(https://nepal.sk8tech.io/wp-content/uploads/2019/01/balance-beach-body.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '@media screen and (orientation:portrait)': {
      backgroundPositionX: 'calc((100vh / 3835 * 5752 * 0.35 - 50vw) * -1)',
    },
  },
  menuGrid: {
    flex: 1,
    overflowY: 'scroll',
    '@media screen and (orientation:landscape)': { width: '120vmin' },
  },
  childGrid: {
    '@media screen and (orientation:landscape)': { width: '40vmin', height: '40vmin' },
    width: '43vmin',
    height: '43vmin',
  },
});

export default styles;
