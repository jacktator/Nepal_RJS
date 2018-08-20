import React , {Component} from 'react';
import {List} from 'antd-mobile';
import {Link,Redirect} from 'react-router-dom';

const Item = List.Item;
// the Header component of Profile, contains the background image, profile picture and name
class Footer extends Component {

  state = {
  goBack: false,
  }

  handleSubmit = () => {
    this.setState({
      goBack:true,
    });


  }

    render() {


      if (this.state.goBack === true) {
        return <Redirect to='/login' />
      }

      return (
        <div style={{marginTop:"40px"}}>
        <List>
        <Link to='/termsandconditions'>
          <Item>View Terms and Conditions</Item>
        </Link>
        </List>
        <List><Item onClick={this.handleSubmit}>Logout</Item></List>
        </div>
      )
    }
}
export default Footer;
