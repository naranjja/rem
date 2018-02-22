import React, { Component } from "react"
import { Button } from "semantic-ui-react"

export default class extends Component {
    render () {
        return (
            <Button as="a" size="large" onClick={ () => this.props.loadData(Array.from({ length: 40 }, () => Math.random())) }>Load random data</Button>
        )
    }
  }