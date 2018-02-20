import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import { Link, withRouter } from "react-router-dom"

class MenuComponent extends Component {
  constructor (props) {
    super (props)
    this.logout = this.logout.bind(this)
  }
  logout () {
    fetch("/logout", {
        method: "get",
        credentials: "same-origin"
    })
    .then(result => {
        if (result.ok) this.props.history.push("/login")
    })
}
    render () {
      return (
        <Menu fixed="top">
            <Link to="/home"><Menu.Item>Home</Menu.Item></Link>
            <Menu.Menu position="right">
                <Menu.Item as="a">Item text</Menu.Item>
                <Menu.Item as="a" onClick={this.logout}>Logout</Menu.Item>
            </Menu.Menu>
        </Menu>
      )
    }
  }

  export default withRouter(MenuComponent)