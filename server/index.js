require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()
const root = path.resolve(__dirname, "..")

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./api")(app, [
    "samples",
    "upload",
    "query",
    "login"
])

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(root, "client", "build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(root, "client", "build", "index.html"))
    })
    app.listen(port, () => {
        console.log(`App listening on port ${port}!`)
    })
} else {
    app.listen(port, () => {
        console.log(`API listening on port ${port}!`)
    })
}