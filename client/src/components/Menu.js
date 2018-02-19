import React, { Component } from "react"
import { Menu } from "semantic-ui-react"

export default class extends Component {
    render () {
      return (
        <Menu fixed="top">
            <Menu.Item as="a">Item text</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as="a">Item text</Menu.Item>
                <Menu.Item as="a">Item text</Menu.Item>
            </Menu.Menu>
        </Menu>
      )
    }
  }