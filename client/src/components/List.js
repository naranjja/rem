import React, { Component } from "react"

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
            <ul>
                {this.state.users.map(user => <li key={user.id}>{user.username}</li>)}
            </ul>
        )
    }
}