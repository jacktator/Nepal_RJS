import React , {Component} from 'react';
import {List} from 'antd-mobile';

const Item = List.Item;
// the Header component of Profile, contains the background image, profile picture and name
class Footer extends Component {

    render() {
      return (
        <div style={{marginTop:"40px"}}>
        <List><Item onClick={()=>{alert("BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH")}}>View Terms and Conditions</Item></List>
        <List><Item onClick={()=>{alert("BYE")}}>Logout</Item></List>
        </div>
      )
    }
}
export default Footer;
