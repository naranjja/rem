const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))