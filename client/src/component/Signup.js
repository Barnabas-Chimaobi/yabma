import React, {Component} from "react"
import styles from "./Signup.module.css"
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {TextInput, Button } from 'react-materialize';
import {NavLink} from "react-router-dom"
import yabmalogo from "./assets/yabmalogo.jpg";

class Signup extends Component {
  render () {
    return (
      <div className={styles.container}>
          <img className={styles.yabmalogo} src={yabmalogo} alt="" />
          <h6 className={styles.signupDescription}> Sign up here</h6>
          <div className={styles.login}>
          <form className={styles.login1}>
          <TextInput label="Username" className={styles.username} noLayout="true"style={{width: 350}}/>
          <TextInput label="Email" noLayout="true" style={{width: 350}}/>
          <TextInput label="Password" noLayout="true" style={{width: 350}}/>
          <Button waves="light" style={{marginRight: '5px', background: " rgb(204, 114, 114)"}}>
          submit
          </Button>
          </form>
          <div className={styles.alreadyHaveAccount}>
            <h6>already have an account ?</h6>
            <NavLink activeClassName="active" className={styles.active} to="/login" >Login</NavLink>
          </div>
        
    

        </div>
      </div>
     
    )
  }
}
export default Signup