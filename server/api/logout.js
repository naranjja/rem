const router = require('express').Router()

router.post('/', (req, res) => {
    req.logout()
})

module.exports = router