import React, { Component } from "react";
import styles from "./Header2.module.css";
import {NavLink} from "react-router-dom"

class Header2 extends Component {
  render() {
    return (
      <div className={styles.navWrapper}>
        <div className={styles.navbar}>
        <NavLink activeClassName="active" to="/signup" >Home</NavLink>
        <NavLink activeClassName="active" to="/signup" >About Us</NavLink>
        <NavLink activeClassName="active" to="/signup" >Our Facilities</NavLink>
        <NavLink activeClassName="active" to="/signup" >Contact Us</NavLink>
        </div>
        <div className={styles.navLogin}>
          <NavLink activeClassName="active" to="/signup" >Signup</NavLink>
          <NavLink activeClassName="active" to="/login" >Login</NavLink>
        </div>
      </div>
    );
  }
}

export default Header2;
