import React, { Component } from "react"
import { Button } from "semantic-ui-react"

export default class extends Component {
    render () {
        return (
            <Button as="a" size="large" onClick={ () => this.props.addPoint(12, 400) }>Add point</Button>
        )
    }
  }