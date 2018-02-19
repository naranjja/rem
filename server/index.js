const express = require("express")
const app = express()

const bodyParser = require("body-parser")
        
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./api")(app, [
  "samples",
  "upload"
])

app.listen(5000, () => console.log("Example app listening on port 5000!"))