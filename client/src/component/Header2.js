import React, { Component } from "react";
import styles from "./Header2.module.css";
import {NavLink} from "react-router-dom"

class Header2 extends Component {
  render() {
    return (
      <div className={styles.navWrapper}>
        <div className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Our facilities</a>
          <a href="#">Contact us</a>
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
