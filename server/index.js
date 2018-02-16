const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "jose"
  }])
});

app.listen(5000, () => console.log('Example app listening on port 5000!'))