require("dotenv").config()

const express = require("express")
const app = express()

const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const path = require('path')
const root = path.resolve(__dirname, '..')

require("./api")(app, [
    "samples",
    "upload",
    "query"
])

app.listen(5000, () => console.log("Express API listening on port 5000!"))