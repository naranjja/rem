import React, { Component } from "react"
import { Container, Segment } from "semantic-ui-react"
import Break from "./Break"
import Menu from "./Menu"
import Button from "./Button"
import UploadButton from "./UploadButton"
import List from "./List"
import LineChart from "./LineChart"
import StockChart from "./StockChart"
import Table from "./Table"

import "semantic-ui-css/semantic.min.css"

export default class extends Component {
  render () {
    return (
      <div className="App">
        <Menu />
        <Break />
        <Container>
          <Segment><Table /></Segment>
          <Segment><Button /></Segment>
          <Segment><UploadButton /></Segment>
          <Segment><List /></Segment>
          <Segment><LineChart /></Segment>
          <Segment><StockChart /></Segment>
        </Container>
        <Break />
      </div>
    )
  }
}