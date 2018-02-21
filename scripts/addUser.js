const bcrypt = require("bcrypt")
const path = require("path")
const { writeFile, existsSync } = require("fs")

let users = []

try {
    if (existsSync(path.join("server", "lib", "users.json"))) {
        if (Array.isArray(require("./../server/lib/users.json"))) {
            users = require("./../server/lib/users.json")
        }
    }
} catch (err) {}

const addUser = (username, password, name) => {
    users.forEach(user => {
        if (user.username === username) {
            console.log(`User ${username} already exists.`)
            process.exit(1)
        }
    })
    bcrypt.hash(password, 10, (err, hash) => {
        users.push({
            id: users.length + 1,
            username,
            hash,
        })
        writeFile(
            path.join("server", "lib", "users.json"),
            JSON.stringify(users, null, 1),
            "utf8",
            (err, result) => {
                if (err) console.error(err)
                console.log(`User ${username} successfully created.`)
                process.exit(0)
            })
    })
}

if (process.argv.length != 4) {
    console.log(`Usage: npm run addUser -- <username> <password>`)
} else {
    addUser(
        process.argv[2],
        process.argv[3],
        process.argv[4],
    )
}