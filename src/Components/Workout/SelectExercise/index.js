import React from 'react';

import { Carousel, Button,SegmentedControl, WingBlank,WhiteSpace} from 'antd-mobile';
import './SelectExercise.css';
import Loading from '../../Loading';
import Hoc from '../../../HOC/Hoc';

  class SelectExercise extends React.Component {
    state = {
    imgHeight: 500,
    currentExercise: 0,
    index: 0,
  }

//This function
  selectExercise = () => {
    this.props.onSelect(this.props.listExercise.exercises[this.state.index].exercise[this.state.currentExercise])
  }

  onChange = (value) => {
    console.log(`selectedIndex:${value.nativeEvent.selectedSegmentIndex}`);
  }

  render() {

    if(this.props.listExercise){
      return (
        <div className="container">
          <img src={require("../../../Assets/Modal/ic_cancel.png")} className="cancel-icon" alt="cancel"
          onClick={() => this.props.cancel()}/>
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={1}
            autoplay={false}
            infinite
            afterChange={index => this.setState({currentExercise: index}) }
          >

          { this.props.listExercise.exercises[this.state.index].exercise.map( (data, key) => (
            <div className="image-with-description" key={key}>
              <div className="excercise-header" style={{margin:"10px 0px 10px",backgroundColor:'white',color:'black', textAlign: "center"}}>{data.name}</div>
              <img
                key = { data.value }
                src={require(`../../../Assets/Workout/images/${key}.jpeg`)}
                alt={data.description}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto', description: data.description });
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
          <WingBlank><SegmentedControl values={['Laxman', 'Gautem']} onChange={this.onChange} on/></WingBlank>
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
  }
  // { this.props.excerciseArray.map( (data, key) => (
  //   <div className="image-with-description" key={key}>
  //     <div className="excercise-header" style={{ height:'25px',background:'black', color:'white', textAlign: "center"}}>{data.description}</div>
  //     <img
  //       key = { data.value }
  //       src={data.imgurl}
  //       alt={data.description}
  //       onLoad={() => {
  //         // fire window resize event to change height
  //         window.dispatchEvent(new Event('resize'));
  //         this.setState({ imgHeight: 'auto', description: data.description });
  //       }}
  //     />
  //   </div>
  // ))}

  }//end class
export default SelectExercise;
