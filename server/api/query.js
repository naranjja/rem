const router = require("express").Router()
const { select, count } = require("./../lib/db")

router.post("/select", (req, res) => {
    
    /*
    POST "/api/query/select"
    Header:
        Content-Type: application/json
    Body:
        {
            "collection": "<collection_name>",
            "query": {
                "<key>": "<filter|string|regex>",
                "<key>": "<filter|string|regex>>",
                ...
                "<key>": "<filter|string|regex>>"                
            },
            "show": {
                "<key>": 1,
                "<key>": 1,
                ...
                "<key>": 1
            }
        }
    NOTE: "show" is optional.
    NOTE: regex must be a string and not include modifiers.
    */

    const { collection, query, show } = req.body
    if (collection && query) {
        select(collection, query, show ? show : {})
            .then(result => res.send(JSON.stringify(result, null, 1)))
            .catch(err => { 
                console.log(err)
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(400)
    }
})

router.post("/count", (req, res) => {

    /*
    POST "/api/query/count"
    Header:
        Content-Type: application/json
    Body:
        {
            "collection": "<collection_name>",
            "query": {
                "<key>": "<filter|string|regex>>",
                "<key>": "<filter|string|regex>>",
                ...
                "<key>": "<filter|string|regex>>"                
            }
        }
    NOTE: regex must be a string and not include modifiers.
    */

    const { collection, query } = req.body
    if (collection && query) {
        count(collection, query)
            .then(result => res.send(result.toString()))
            .catch(err => {
                console.log(err)
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(400)
    }
})

module.exports = router