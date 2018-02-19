require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./api")(app, [
    "samples",
    "upload",
    "query"
])

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Express API listening on port ${process.env.EXPRESS_PORT}!`)
})