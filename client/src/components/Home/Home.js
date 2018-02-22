import React, { Component } from "react"
import { Container, Segment, Label, Grid } from "semantic-ui-react"
import Break from "./../Break"
import Menu from "./../Menu"
import AlertButton from "./../AlertButton"
import UploadButton from "./../UploadButton"
import List from "./../List"
import ChartComponent from "./../ChartComponent"
import StockChart from "./../StockChart"
import Table from "./../Table"
import Alert from "./../Alert"

export default class extends Component {

  constructor () {
    super ()
    this.state = {
      isAlertShown: false,
      x: "",
      y: "",
    }
    this.showAlert = this.showAlert.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
  }

  showAlert (x, y) {
    this.setState({
      isAlertShown: true,
      x,
      y
    })
  }

  hideAlert () {
    this.setState({
      isAlertShown: false
    })
  }

  render () {
    return (
      <div>
        <Menu />
        <Break />
        <Container>

            <Alert
              hideAlert = { this.hideAlert }
              isAlertShown = { this.state.isAlertShown }
              x = { this.state.x }
              y = { this.state.y }
             />

            <Segment>
              <Label attached="top">Fetch</Label>
              <List />
            </Segment>

            <Segment>
              <Label attached="top">DataTables</Label>
              <Table />
            </Segment>

            <Grid columns="equal">
            
              <Grid.Column>
                <Segment>
                  <Label attached="top">SweetAlert</Label>
                  <AlertButton />
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment>
                  <Label attached="top">Formidable</Label>
                  <UploadButton />
                </Segment>
              </Grid.Column>

            </Grid>
            
            <Segment>
              <Label attached="top">Highcharts</Label>
              <ChartComponent
                showAlert = { this.showAlert }
              />
            </Segment>

            <Segment>
              <Label attached="top">Highstock</Label>
              <StockChart />
            </Segment>
            
        </Container>
        <Break />
      </div>
    )
  }
}