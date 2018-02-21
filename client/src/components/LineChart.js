import React, { Component } from "react"
import Highcharts from "react-highcharts"

export default class extends Component {

    constructor (props, context) {
        super (props, context)
        this.getConfig = this.getConfig.bind(this)
    }

    getConfig () {
        return {
            credits: {
                enabled: false
            },
            title: {
                text: "Chart title"
            },
            plotOptions: {
                series: {
                    point: {
                        events: {
                            click: (e) => {
                                this.props.showAlert(e.point.x, e.point.y)
                            }
                        }
                    }
                }
            },
            series: [{}]
        }
    }

    shouldComponentUpdate () {
        return false
    }

    componentDidMount () {
        const chart = this.refs.chart.getChart()
        fetch("/api/samples/linechart")
            .then(response => response.json())
            .then(data => {
                chart.series[0].name = "Series name"
                chart.series[0].setData(data)
            })
    }

    render () {
        return (
            <Highcharts config={this.getConfig()} ref="chart" />
        )
    }
}