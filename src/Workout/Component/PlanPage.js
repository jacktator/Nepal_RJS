import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';


const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

const iconDisplay = finish => {
    switch (finish) {
        case true:
            return <FeedbackIcon />
        default:
            return <RightIcon />
    }
}

class SimpleList extends React.Component {

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    {
                        [...Array(this.props.days || 5)].map((v, k) => (
                            <div key={k}>
                                <ListItem button disableRipple>
                                    <ListItemText primary={`Day ${k}`} />
                                    <ListItemIcon>{iconDisplay(this.props.finish)}</ListItemIcon>
                                </ListItem>
                                <Divider />
                            </div>
                        ))
                    }
                </List>
            </div>
        );
    
    };
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);