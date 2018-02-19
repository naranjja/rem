const express = require("express")
const app = express()

const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const path = require('path')
const root = path.resolve(__dirname, '..')

const exposeModules = modules => {
    modules.forEach(module => {
        app.use(
            "/modules/" + module,
            express.static(path.join(root, "client", "node_modules", module))
        )
    })
}

exposeModules([
    "jquery",
    "semantic-ui-css",
    "datatables.net",
    "datatables.net-buttons",
    "datatables.net-se",
    "datatables.net-buttons-se",
    "jszip",
    "pdfmake",
])

require("./api")(app, [
    "samples",
    "upload",
])

app.listen(5000, () => console.log("Example app listening on port 5000!"))