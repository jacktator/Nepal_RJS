import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';


const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleList extends React.Component {

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    {
                        this.props.program || [...Array(this.props.program || 5)].map((v, k) => (
                            <div key={k}>
                                <ListItem button disableRipple>
                                    <ListItemText primary={v.hasOwnProperty('programName') ? v.programName : 'program'} />
                                    <ListItemIcon><RightIcon /></ListItemIcon>
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