import React, { Component } from "react"
import DataButton from "./DataButton"
import LineChart from "./LineChart"

export default class extends Component {
    render () {
        return (
            <div>
                <LineChart
                    showAlert = { this.props.showAlert }
                />
                <DataButton />
            </div>
        )
    }
}