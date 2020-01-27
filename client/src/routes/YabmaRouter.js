import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../App"
import Signup from "../component/Signup"
import Login from "../component/Login"

const Router = () => {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
          </Switch> 
        </BrowserRouter>
      </div>
    )
  
}

export default Router