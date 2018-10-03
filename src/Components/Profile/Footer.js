import React from 'react';
import {List} from 'antd-mobile';
import {Link} from 'react-router-dom';

const Item = List.Item;
// the Header component of Profile, contains the background image, profile picture and name

const Footer = (props) => {
      return (
        <div style={{marginTop:"40px"}}>
        <List>
        <Link to='/termsandconditions'>
          <Item>View Terms and Conditions</Item>
        </Link>
        </List>
        <List><Item onClick={props.onLogoutHandler}>Logout</Item></List>
        </div>
      )
}
export default Footer;
