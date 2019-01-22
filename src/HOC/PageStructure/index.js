/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import MidPart from './MidPart';
import { styles } from './style';

class index extends React.PureComponent {
  render() {
    const {
      classes, backgroundImage, tapBarContent, title, top, workout, showBottomButton, midComponent, FooterContent, currentPage, currentWeek, tabsValue, onTagClick, topDiscription,
    } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.containerGrid} direction="column" justify="space-between" alignContent="space-between">

          {top && (
            <Grid container className={classes.top} style={{ backgroundImage: `url("${backgroundImage}")` }}>
              <Grid container className={classes.topInline} justify="center" direction="column">
                <Typography variant="h5" color="secondary">{title}</Typography>
                {topDiscription && (
                <Typography variant="body2" color="secondary">You are currently at week{currentWeek}</Typography>
                )}
                {topDiscription && <Typography variant="body2" color="secondary">{sessionStorage.progress ? ((sessionStorage.progress - 1) / (sessionStorage.days * 5)) * 100 : 0 }% completed</Typography>}
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
