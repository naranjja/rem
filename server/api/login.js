const router = require("express").Router()
const auth = require("./../lib/auth")

router.post('/', (req, res) => {
    console.log(req.body.username, req.body.password)
    // check if password matches, somehow
    auth.authenticate("login")
    res.sendStatus(200)
})

module.exports = router