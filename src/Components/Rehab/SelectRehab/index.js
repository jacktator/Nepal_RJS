import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Loading from '../../Loading';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
});

class SwipeableTextMobileStepper extends React.Component {
    state = {
        activeStep: 0,
        currentRehab: 0,

    };
    selectExercise = () => {
        this.props.onSelect(this.props.rehabList.data[this.state.currentRehab])
    }

    handleNext = () => {
        this.setState(prevState => ({
            currentRehab: prevState.currentRehab + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            currentRehab: prevState.currentRehab - 1,
        }));
    };

    handleStepChange = currentRehab => {
        this.setState({ currentRehab });
    };

    render() {
        const { classes, theme } = this.props;
        const { currentRehab } = this.state;
        if (this.props.rehabList && this.props.rehabList !== null) {
            const rehab = this.props.rehabList.data;
            const maxSteps = rehab.length;
            return (
                <div className={classes.root}>
                    <img src={require("../../../Assets/Modal/ic_cancel.png")} className="cancel-icon" alt="cancel"
                        onClick={() => this.props.onCancel()} />
                    <Paper square elevation={0} className={classes.header}>
                        <Typography>{rehab[currentRehab].name}</Typography>
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={currentRehab}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                        {rehab.map((step, index) => (
                            <div key={step.name}>
                                {Math.abs(currentRehab - index) <= 2 ? (
                                    <img className={classes.img} src='https://nepal.sk8tech.io/wp-content/uploads/2018/10/Images-38.jpeg' alt={step.label} />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={currentRehab}
                        className={classes.mobileStepper}
                        nextButton={
                            <Button disableRipple size="small" onClick={this.handleNext} disabled={currentRehab === maxSteps - 1}>
                                Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button disableRipple size="small" onClick={this.handleBack} disabled={currentRehab === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Back
                  </Button>
                        }
                    />
                    <Button style={{borderRadius: 0}} variant="contained" color="primary" fullWidth disableRipple onClick={() => this.selectExercise()}>Select</Button>

                </div>
            );
        }
        else {
            return (
                <Loading mode="selectExercise" />
            )
        }
    }
}

SwipeableTextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);