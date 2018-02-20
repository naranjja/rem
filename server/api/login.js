const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body.username, req.body.password)
    // check if password matches, somehow
    res.sendStatus(200)
})

module.exports = router