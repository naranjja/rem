import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./Home"
import Login from "./Login"

import "semantic-ui-css/semantic.min.css"

const style = {
  background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://source.unsplash.com/1920x1080?nature)",
  backgroundSize: "cover",
  overflow: "hidden"
}

export default class extends Component {

  render () {
    return (
      <div style={style}>
        <Switch>
          <Route exact path="/home" component={ Home }/>
          <Route exact path="/login" component={ Login }/>
        </Switch>
      </div>
    )
  }
}