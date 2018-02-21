import React, { Component } from "react"
import { List } from "semantic-ui-react"

export default class extends Component {
    state = {
        users: []
    }
    componentDidMount () {
        fetch("/api/samples/users")
            .then(res => res.json())
            .then(users => this.setState({ users }))
    }
    render () {
        return (
            <List>
                <p>Registered users:</p>
                {this.state.users.map(user => {
                    return (
                        <List.Item key={user.id}>
                            <List.Icon name='user' />
                            <List.Content>{user.username}</List.Content>
                        </List.Item>
                    )
                })}
            </List>
        )
    }
}