import React, { Component } from "react";
import styles from "./Header.module.css";
import yabma1 from "./assets/yabma1.png";
import yabmalogo from "./assets/yabmalogo.jpg";


class Header extends Component {
  render() {
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <h2>YISA</h2>
          <img className={styles.yabmalogo} src={yabmalogo} alt="" />
          <h5>Literacy per excellence</h5>
        </div>
        <div className={styles.seeYabma}>
          <img className={styles.yabma1} alt="" />
        </div>
        <div className={styles.yabmaName}>
          <h3>YABMA INT'L SCIENCE ACADEMY</h3>
          <h6>Shaping the bright future of every kid</h6>
          <h6>Hon. Yakubu Yunusa Avenue, 500 housing unit, Lokoja Kogi state </h6>
        </div>
      </div>
    );
  }
}

export default Header;
