const router = require("express").Router()

router.get("/linechart", (req, res) => {

    /*
    GET "/api/samples/linechart"
    */

    res.json([29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4])
})

router.get("/stockchart", (req, res) => {

    /*
    GET "/api/samples/stockchart"
    */

    res.json([
        [1223510400000, 12.68],
        [1223856000000, 15.75],
        [1223942400000, 14.87],
        [1224028800000, 13.99],
        [1224115200000, 14.56],
        [1224201600000, 13.91],
        [1224460800000, 14.06],
        [1224547200000, 13.07],
        [1225756800000, 15.86],
        [1225843200000, 14.76],
        [1225929600000, 14.16],
        [1226016000000, 14.03],
        [1226361600000, 13.54],
        [1226448000000, 12.87],
        [1228435200000, 13.43],
        [1228694400000, 14.25],
        [1228780800000, 14.29],
        [1228867200000, 14.03],
        [1228953600000, 13.57],
        [1229040000000, 14.04],
        [1229299200000, 13.54]
      ])
})

router.get("/users", (req, res) => {

    /*
    GET "/api/samples/users"
    */

    res.json([{
        id: 1,
        username: "jose"
    }])
})

module.exports = router