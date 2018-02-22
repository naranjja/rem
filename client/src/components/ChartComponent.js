import React, { Component } from "react"
import AddPointButton from "./AddPointButton"
import LoadDataButton from "./LoadDataButton"
import LineChart from "./LineChart"

export default class extends Component {

    constructor (props) {
        super (props)
        const showAlert = this.props.showAlert
        this.state = {
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
                                showAlert(e.point.x, e.point.y)
                            }
                        }
                    }
                }
            },
            series: [{}]
        }
        this.loadData = this.loadData.bind(this)
        this.addPoint = this.addPoint.bind(this)
        this.getChart = this.getChart.bind(this)
    }

    loadData (data) {
        this.setState(prevState => ({
            series: [{
                ...prevState.series[0],
                data
            }]
        }))
    }

    getChart (ref) {
        this.chartRef = ref
    }

    addPoint (point) {
        const chart = this.chartRef.getChart()
        chart.series[0].addPoint(point)
    }

    render () {
        return (
            <div>
                <LineChart
                    config = { this.state }
                    getChart = { this.getChart }
                    loadData = { this.loadData }
                />
                <AddPointButton
                    addPoint = { this.addPoint }
                />
                <LoadDataButton
                    loadData = { this.loadData }
                />
            </div>
        )
    }
}