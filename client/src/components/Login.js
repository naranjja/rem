import React, { Component } from "react"
import { Container, Segment, Form, Button, Input, Grid } from "semantic-ui-react"
import SweetAlert from "sweetalert-react"
import Break from "./Break"

import "semantic-ui-css/semantic.min.css"

export default class extends Component {

    constructor (props) {
        super (props)
        this.state = {
            username: "",
            password: "",
            alert: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit () {
        const credentials = this.state
        fetch("/login", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            credentials: "same-origin",
            body: JSON.stringify(credentials)
        })
        .then(auth => {
            if (auth.ok) this.props.history.push("/home")
            else this.setState({ alert: true })
        })
    }

    render () {
        return (
            <div>
                <Break />
                <Break />
                <Container>
                    <Grid verticalAlign="middle" textAlign="center" style={{ height: "100%" }}>
                        <Grid.Column style={{ maxWidth: "500px" }}>
                            <Form size="large">
                                <Segment>
                                    <Form.Field>
                                        <Input 
                                            icon="user" 
                                            iconPosition="left" 
                                            onChange={(e, input) => this.setState({ username: input.value })}
                                            placeholder="Enter your username" />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input 
                                            icon="lock" 
                                            iconPosition="left" 
                                            type="password" 
                                            onChange={(e, input) => this.setState({ password: input.value })}
                                            placeholder="Enter your password" />
                                    </Form.Field>
                                    <Button fluid size="large" onClick={this.handleSubmit}>Login</Button>
                                </Segment>
                            </Form>
                            <br></br>
                            <h2 style={{ color: "white" }}>rem</h2>
                        </Grid.Column>
                    </Grid>
                </Container>
                <Break />
                <SweetAlert
                    show={this.state.alert}
                    title="Wrong!"
                    type="error"
                    text="The entered information does not match our records."
                    onConfirm={() => this.setState({ alert: false })}
                />
            </div>
        )
    }
}