import React from 'react';
import Typography from '@material-ui/core/Typography';
import {style} from './style.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import Footer from './Footer';

class FooterComponent extends React.Component {
    state = {
        value: 3,
        completed: 20,
        midPartTabsValue: new Date().getDay(),
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    midPartTabsValueHandleChange = (event, value) => {
        this.setState({ midPartTabsValue: value });
    };

    render() {

        return (
            <div>
                {!!this.props.title && <div style={Object.assign({backgroundImage:`url(${this.props.backgroundImage})`}, style.top)}>
                    <Typography component='h4' variant='h4' style={style.title}>
                        {this.props.title}
                    </Typography>
                    {this.props.showProgress && <div style={{height:'40%', width:'90%', marginLeft:'5%'}}>
                        <Typography component='p' style={style.header_description}>
                            You are currently at {this.props.currentWeek} Week 
                        </Typography>
                        <Typography component='p' style={style.header_description}>
                            {this.props.progress} Completed 
                        </Typography>
                        <LinearProgress variant="determinate" value={this.state.completed} style={style.progress} />
                    </div>}
                </div>}
                <div style={this.props.showBottomButton ? style.midWithBotton : style.midWithoutBotton}>
                    {this.props.midComponent}
                </div>
                <div style={(this.props.showBottomButton ? style.bottomWithBotton : style.bottomWithoutBotton)}>
                    <Footer 
                    showBottomButton={this.props.showBottomButton}
                    FooterContent={this.props.FooterContent}
                    FooterButtonClick={this.props.FooterButtonClick}
                    />
                </div>
            </div>
        );
    }
}


export default FooterComponent;