import React, { Component } from "react"
import { Button } from "semantic-ui-react"

export default class extends Component {
    render () {
        return (
            <Button as="a" size="large" onClick={() => console.log('click')}>Add point</Button>
        )
    }
  }