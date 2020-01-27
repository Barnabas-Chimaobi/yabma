import React, { Component } from "react";
import styles from "./Body.module.css";
import j3project from "./assets/j3project.jpg";
import Yabmapath from "./assets/yabmapath.jpg";

class Body extends Component {
  render() {
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.wrapper1}>
          <h2>Our Offer</h2>
          <h6 className={styles.enrollNewStudent}>Enrollment Of New Students </h6>
          <h6 className={styles.paySchoolFees}>
            Make School Fees Payments Online
          </h6>
          <h6 className={styles.jambRegistration}>
            Jamb Registration & CBT Exams
          </h6>
          <h6 className={styles.cbtTraining}>CBT Training and Exams</h6>
          <h6 className={styles.newsRoom}>Our Newsroom</h6>
        </div>
        <div className={styles.wrapper2}>
          <h2>Latest info & Breaking News</h2>
          <h6>
            This is to inform the general public that the new academic session
            of yabma int'l science academy will begin on the 11th of september
            2019. In view of this we hereby encourage all our parents, guardian
            and ward to set our mind on the interesting upcoming session. Hence,
            get prepared!!!
          </h6>
          {/* <img className={styles.j3project} src={j3project} width="600rem" /> */}
          {/* <img
            className={styles.Yabmapath}
            src={Yabmapath}
            height="500rem"
            width="600rem"
          /> */}
        </div>
        <div className={styles.wrapper3}>
          <h2 className={styles.mission}>Our Mission</h2>
          <h6>
            Yamba int'l science academy prepare's students to stand understand,
            contribute to, and succeed in a rapidly changing society, thus
            making the world a better and more just place.
          </h6>
          <h2 className={styles.vision}>Our Vision</h2>
          <h6>
            Our aim is to ensure that our students develop both the skills that
            a sound education provides and the competencies essential for
            success and leadership in the emerging creative economy where skills
            is ruling the world
          </h6>
        </div>
      </div>
    );
  }
}

export default Body;
