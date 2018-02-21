import React, { Component } from "react"
import SweetAlert from "sweetalert-react"

import "sweetalert/dist/sweetalert.css"

const titles = ["Aha!", "Wow!", "Amazing!", "Incredible!", "Great!"]

export default class extends Component {

    render () {
        return (
            <div>
                <SweetAlert
                    show={ this.props.isAlertShown }
                    title={ titles[Math.floor(Math.random() * titles.length)] }
                    type="info"
                    html
                    text={ `You clicked on <span style="font-weight:800">(${this.props.x}, ${this.props.y})</span>` }
                    onConfirm={() => this.props.hideAlert() }
                />
            </div>
        )
    }
  }