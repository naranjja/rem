const router = require("express").Router()
const formidable = require("formidable")
const path = require("path")

router.post("/", (req, res) => {

    /*
    POST "/api/upload"
    Header:
        Content-Type: multipart/form-data
    Body:
        FormData()
    */

    const form = new formidable.IncomingForm()
    form.uploadDir = path.join(path.resolve(__dirname, ".."), "uploads")
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.sendStatus(200)
        }
    })
})

module.exports = router