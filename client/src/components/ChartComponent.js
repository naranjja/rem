import React, { Component } from "react"
import DataButton from "./DataButton"
import LineChart from "./LineChart"

const seriesName = "some series"

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
    }

    loadData (data) {
        this.setState({
            series: [{
                name: seriesName,
                data
            }]
        })
    }

    addPoint (x, y) {
        const dataCopy = this.state.series[0].data
        dataCopy.push(y)
        this.setState({
            series: [{
                name: seriesName,
                data: dataCopy
            }]
        })
    }

    render () {
        return (
            <div>
                <LineChart
                    config = { this.state }
                    loadData = { this.loadData }
                />
                <DataButton
                    addPoint = { this.addPoint }
                />
            </div>
        )
    }
}