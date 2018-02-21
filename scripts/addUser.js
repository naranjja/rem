const bcrypt = require("bcrypt")
const users = require("./../server/lib/users")
const { writeFile } = require("fs")

const addUser = (username, password, name) => {
    users.forEach(user => {
        if (user.username === username) {
            console.log(`User ${username} already exists.`)
            process.exit()
        }
    })
    bcrypt.hash(password, 10, (err, hash) => {
        users.push({
            id: users.length + 1,
            username,
            hash,
        })
        writeFile("./server/lib/users.json", JSON.stringify(users, null, 1), "utf8", (err, result) => {
            if (err) console.error(err)
            console.log(`User ${username} successfully created.`)
            process.exit()
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
