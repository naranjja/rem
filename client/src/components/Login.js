import React, { Component } from "react"
import { browserHistory } from 'react-router'
import { Container, Segment, Form, Button, Input } from "semantic-ui-react"
import Break from "./Break"

import "semantic-ui-css/semantic.min.css"

export default class extends Component {
    constructor (props) {
        super (props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit () {
        const credentials = this.state
        fetch("/api/login", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(auth => {
            if (auth.ok) this.props.history.push('/home')
        })
    }

    render () {
        return (
            <Container>
                <Break />
                <Segment>
                    <Form>
                        <Form.Field>
                            <Input 
                                icon="user" 
                                iconPosition="left" 
                                onChange={(e, input) => this.setState({ username: input.value })}
                                placeholder="Ingrese su nombre de usuario" />
                        </Form.Field>
                        <Form.Field>
                            <Input 
                                icon="lock" 
                                iconPosition="left" 
                                type="password" 
                                onChange={(e, input) => this.setState({ password: input.value })}
                                placeholder="Ingrese su contraseña" />
                        </Form.Field>
                        <Button fluid size="large" onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
}