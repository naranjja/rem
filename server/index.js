const express = require("express")
const app = express()

app.get("/users", (req, res) => {
  res.json([{
  	id: 1,
  	username: "jose"
  }])
})

app.get("/samples/linechart", (req, res) => {
  res.json([29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4])
})

app.listen(5000, () => console.log("Example app listening on port 5000!"))