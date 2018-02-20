import React, { Component } from "react"

import $ from "jquery"

import "datatables.net"
import "datatables.net-se/js/dataTables.semanticui"
import "datatables.net-se/css/dataTables.semanticui.css"
import "datatables.net-buttons/js/dataTables.buttons"
import "datatables.net-buttons/js/buttons.html5"
import "datatables.net-buttons/js/buttons.colVis"
import "datatables.net-buttons-se/js/buttons.semanticui"
import "datatables.net-buttons-se/css/buttons.semanticui.min.css"
import "jszip/dist/jszip"

import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs

const columns = [
    { title: "x", data: "x" },
    { title: "y", data: "y" }
]

export default class extends Component {
    componentDidMount() {
        fetch("/api/samples/table")
            .then(response => response.json())
            .then(data => {
                const table = $(this.refs.table).DataTable({
                    data,
                    columns,
                    ordering: false,
                    bDestroy: true,
                    autoWidth: false,
                    bLengthChange: false,
                    bInfo: false,
                    lengthChange: false,
                    pageLength: 10,
                    buttons: ["copy", "csv", "pdf"],
                    language: {
                        search: `<i class="search icon"></i>`
                    }
                })
                table
                    .buttons()
                    .container()
                    .appendTo($(
                        "div.eight.column:eq(0)", 
                        table.table().container()
                    ))
            })
    }
    componentWillUnmount() {
        $(this.refs.table)
            .DataTable()
            .destroy(true)
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <table className="ui celled table" ref="table" />
        )
    }
}