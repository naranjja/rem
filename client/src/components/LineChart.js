import React, { Component } from "react"
import Highcharts from "react-highcharts"

export default class extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        if (this.props.config.series !== nextProps.config.series) {  // if data has changed
            return true  // update the chart
        }
        return false
    }

    componentDidMount () {
        fetch("/api/samples/linechart")
            .then(response => response.json())
            .then(data => {
                this.props.loadData(data)
            })
    }

    render () {
        return (
            <Highcharts config={this.props.config} />
        )
    }
}