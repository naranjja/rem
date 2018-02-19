import React, { Component } from "react"
import { Container, Segment } from "semantic-ui-react"
import Break from "./Break"
import Button from "./Button"
import List from "./List"

import "semantic-ui-css/semantic.min.css"

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Break />
        <Container>
          <Segment><Button /></Segment>
          <Segment><List /></Segment>
        </Container>
      </div>
    )
  }
}