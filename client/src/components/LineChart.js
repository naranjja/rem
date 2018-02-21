import React, { Component } from "react"
import Highcharts from "react-highcharts"

export default class extends Component {

    constructor (props, context) {
        super (props, context)
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
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (this.state !== nextState) {  // if state changed,
            return true  // update chart
        }
        return false
    }

    componentDidMount () {
        fetch("/api/samples/linechart")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    series: [{
                        name: "",
                        data
                    }]
                })
            })
    }

    render () {
        return (
            <Highcharts config={this.state} />
        )
    }
}