import React, { Component } from "react"
import { Button } from "semantic-ui-react"
import SweetAlert from "sweetalert-react"

import "sweetalert/dist/sweetalert.css"

export default class extends Component {

    constructor (props, context) {
        super (props, context)
        this.state = {
            show: false,
        }
    }

    render () {
        return (
            <div>
                <Button as="a" size="large" onClick={() => this.setState({ show: true })}>Trigger an alert</Button>
                <SweetAlert
                    show={this.state.show}
                    title="It works!"
                    type="success"
                    text="This is some alert"
                    onConfirm={() => this.setState({ show: false })}
                />
            </div>
        )
    }
  }