import React from 'react';

import { Carousel, WingBlank, Button } from 'antd-mobile';
import './SelectExercise.css';

  class SelectExercise extends React.Component {
    state = {
    data: ['1', '2', '3'],
    imgHeight: 500,
    currentItem: 0
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
        <div className="container">
          <div className="excercise-header" style={{ textAlign: "center"}}>
            Deadlift
          </div>
          <Carousel
            autoplay={false}
            infinite
            afterChange={index => this.setState({currentItem: index})}
          >
            {this.state.data.map(val => (
                <img
                  key = { val }
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ height:'400px', width:'300px', verticalAlign: 'top'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
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
