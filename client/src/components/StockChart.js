import React, { Component } from "react"
import Highstock from "react-highcharts/ReactHighstock"

export default class extends Component {

    constructor (props, context) {
        super (props, context)
        this.state = {
            credits: {
                enabled: false
            },
            rangeSelector: {
                selected: 1
            },
            title: {
                text: "Stock chart title"
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
        fetch("/api/samples/stockchart")
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
            <Highstock config={this.state} />
        )
    }
}