import React,{Component} from 'react';
import { Carousel, Button,SegmentedControl, WingBlank,WhiteSpace} from 'antd-mobile';
import './SelectExercise.css';
import _ from 'lodash';
import Loading from '../../Loading';

  class SelectRehab extends Component {
    state = {

      currentRehab: 0,
      imgHeight: 500,
      index: 0,
      currentChild:0,
  }

  selectExercise = () => {
    this.props.onSelect(this.props.rehabList.data[this.state.currentRehab])
  }
  render() {
    if(this.props.rehabList && this.props.rehabList !== null){
      const rehab = this.props.rehabList.data;
      return (
        <div className="container">
          <img src={require("../../../Assets/Modal/ic_cancel.png")} className="cancel-icon" alt="cancel"
          onClick={() => this.props.onCancel()}/>
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={1}
            autoplay={false}
            infinite
            afterChange={index => this.setState({currentRehab: index}) }
          >
          { rehab.map( (data, key) => (
            <div className="image-with-description" key={key}>
              <div className="excercise-header" style={{margin:"10px 0px 10px",backgroundColor:'white',color:'black', textAlign: "center"}}>{data.name}</div>
              <img
                key = { key }
                src={`https://nepal.sk8tech.io/wp-content/uploads/2018/10/Images-38.jpeg`}

                alt={"hi"}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </div>
          ))}
          </Carousel>
          <WhiteSpace/>
          <div className="select-button">
            <WingBlank>
              <Button type="primary" onClick={() => this.selectExercise()}>Select</Button>
            </WingBlank>
            <WhiteSpace/>
          </div>
          <WhiteSpace/>

          <WhiteSpace/>
        </div>
      );
    }else{
      return(
        <div>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <Loading mode="selectExercise"/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        <WhiteSpace size='xl'/>
        </div>
      )
    }
  }//end render
}//end class

export default SelectRehab;
