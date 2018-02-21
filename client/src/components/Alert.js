import React, { Component } from "react"
import SweetAlert from "sweetalert-react"

import "sweetalert/dist/sweetalert.css"

export default class extends Component {

    render () {
        return (
            <div>
                <SweetAlert
                    show={this.props.isAlertShown}
                    title="It works!"
                    type="success"
                    text="This is some alert"
                    onConfirm={() => this.props.hideAlert() }
                />
            </div>
        )
    }
  }