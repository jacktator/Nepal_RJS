/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import MidPart from './MidPart';
import { styles } from './style';

class index extends React.PureComponent {
  render() {
    const {
      classes, backgroundImage, tapBarContent, title, top, workout, showBottomButton, midComponent, FooterContent, currentPage, currentWeek, tabsValue, onTagClick, topDiscription, planPage, restartClick,
    } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.containerGrid} direction="column" justify="space-between" alignContent="space-between">

          {top && (
            <Grid container className={classes.top} style={{ backgroundImage: `url("${backgroundImage}")` }}>
              <Grid container className={classes.topInline} justify="space-between" direction="column">
                <Grid container direction="row" justify="space-between">

                  {planPage && (
                  <>
                    <IconButton className={classes.menuButton} component={Link} to="/mainmenu" color="primary" aria-label="Menu">
                      <LeftIcon style={{ fontSize: '30px' }} />
                    </IconButton>
                    <Button style={{ color: 'white' }} onClick={restartClick}>
                        Restart
                    </Button>
                </>
                  )}
                </Grid>

                <div>
                  <Typography variant="h5" color="secondary">{title}</Typography>
                  <div style={{ height: '50px' }}>
                    {topDiscription && (
                    <>
                      <Typography variant="body2" color="secondary">You are currently at week{currentWeek}</Typography>
                      <Typography variant="body2" color="secondary">{sessionStorage.progress ? (((sessionStorage.progress - 1) / (sessionStorage.days * 5)) * 100).toFixed(1) : 0 }% completed</Typography>
                      <LinearProgress className={classes.progressBar} variant="determinate" value={sessionStorage.progress ? (((sessionStorage.progress - 1) / (sessionStorage.days * 5)) * 100) : 0} />
                    </>
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
          )}

          <Grid container className={classes.mid} direction="column" justify="space-around" alignContent="space-around" alignItems="center">
            {!!tapBarContent && <MidPart onTagClick={onTagClick} tabsValue={tabsValue} currentWeek={currentWeek} tapBarContent={tapBarContent} />}
            {midComponent}
          </Grid>

          <Grid container>
            <Footer workout={workout} FooterContent={FooterContent} showBottomButton={showBottomButton} currentPage={currentPage} />
          </Grid>

        </Grid>
      </div>
    );
  }
}

index.propTypes = {
  classes: PropTypes.object.isRequired,
  backgroundImage: PropTypes.string,
  tapBarContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  title: PropTypes.string,
  top: PropTypes.bool,
  showBottomButton: PropTypes.bool,
  midComponent: PropTypes.object.isRequired,
  currentPage: PropTypes.number,
};

export default withStyles(styles)(index);
