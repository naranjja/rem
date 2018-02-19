import React, { Component } from "react"
import Highstock from "react-highcharts/ReactHighstock"

const config = {
    credits: {
        enabled: false
    },
    rangeSelector: {
        selected: 1
    },
    title: {
        text: 'Stock chart title'
    },
    series: [{}]
}

export default class extends Component {
    componentDidMount () {
        const chart = this.refs.chart.getChart()
        fetch("/samples/stockchart")
            .then(response => response.json())
            .then(data => {
                chart.series[0].name = "Series name"
                chart.series[0].setData(data)
            })
    }
    render () {
        return (
            <Highstock config={config} ref="chart" />
        )
    }
}