import React, { Component } from "react"
import { Button } from "semantic-ui-react"

export default class extends Component {
    render () {
        let fileInput = null
        const uploadFile = (file) => {
            const formData = new FormData()
            formData.append("file", file)
            fetch("/api/upload", {
                    method: "post",
                    body: formData
                })
                .then(() => {
                    fileInput.value = ""  // reset input
                    console.log("Uploaded file.")
                })
                .catch(err => console.log(err))
        }
        return (
            <div>
                <input 
                    type="file"
                    ref={(input) => { fileInput = input }}
                    onChange={() => uploadFile(fileInput.files[0])}
                    style={{ display: "none" }} />
                <Button fluid as="a" size="large" onClick={() => fileInput.click()}>Upload</Button>
            </div>
        )
    }
}