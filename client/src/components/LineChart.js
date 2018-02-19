import React, { Component } from "react"
import Highcharts from "react-highcharts"

const config = {
    credits: {
        enabled: false
    },
    title: {
        text: "Chart title"
    },
    series: [{}]
}

export default class extends Component {
    componentDidMount () {
        const chart = this.refs.chart.getChart()
        fetch("/samples/linechart")
            .then(response => response.json())
            .then(data => {
                chart.series[0].name = "Series name"
                chart.series[0].setData(data)
            })
    }
    render () {
        return (
            <Highcharts config={config} ref="chart" />
        )
    }
}