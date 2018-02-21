require("dotenv").config()

const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")
const auth = require("./lib/auth")
const { ensureLoggedIn } = require("connect-ensure-login")

const app = express()
const root = path.resolve(__dirname, "..")
const port = process.env.PORT || 5000

app.set("trust proxy", true)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser("well-kept"))

app.use(
    session ({
        secret: "well-kept",
        name: "agnostic",
        resave: true,
        saveUninitialized: true
    })
)

require("./lib/auth")(passport)
app.use(passport.initialize())
app.use(passport.session())

app.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user)
})

app.get("/logout", (req, res) => {
    req.logout()
    res.sendStatus(200)
})

app.get("*", (req, res, next) => {
    res.locals.user = req.user || null
    next()
})

require("./api")(app, [
    "samples",
    "upload",
    "query"
])

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(root, "client", "build")))
    app.get("/login", (req, res) => {
        res.sendFile(path.join(root, "client", "build", "index.html"))
    })
    app.get("*", ensureLoggedIn(), (req, res) => {
        res.sendFile(path.join(root, "client", "build", "index.html"))
    })
    app.listen(port, () => {
        console.log(`App listening on port ${port}!`)
    })
} else {
    app.listen(port, () => {
        console.log(`API listening on port ${port}!`)
    })
}