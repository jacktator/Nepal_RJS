import React from 'react';

import { Carousel, WingBlank, Button } from 'antd-mobile';
import './SelectExercise.css';

  class SelectExercise extends React.Component {
    state = {
    imgHeight: 500,
    currentItem: 0,
    description: ""
  }

  render() {
    return (
        <div className="container">
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={1}
            autoplay={false}
            infinite
            afterChange={index => this.setState({currentItem: index})}
          >
          { this.props.excerciseArray.map( data => (
            <div className="image-with-description">
              <div className="excercise-header" style={{ height:'25px',background:'black', color:'white', textAlign: "center"}}>{data.description}</div>
              <img
                key = { data.value }
                src={data.imgurl}
                alt={data.description}
                style={{ height:'220px', width:'100%', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto', description: data.description });
                }}
              />
            </div>
          ))}
          </Carousel>
          <div className="select-button">
            <Button type="primary" onClick={() => (this.props.onSelect(this.state.currentItem))}> select</Button>
          </div>
        </div>
    );
  }

  }//end class
export default SelectExercise;
