import React, { Component } from "react"
import { Container, Segment, Label, Grid } from "semantic-ui-react"
import Break from "./Break"
import Menu from "./Menu"
import AlertButton from "./AlertButton"
import UploadButton from "./UploadButton"
import List from "./List"
import LineChart from "./LineChart"
import StockChart from "./StockChart"
import Table from "./Table"

export default class extends Component {
  render () {
    return (
      <div>
        <Menu />
        <Break />
        <Container>

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
              <LineChart />
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