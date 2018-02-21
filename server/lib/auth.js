const { Strategy } = require("passport-local")
const bcrypt = require("bcrypt")

let users = null
try {
    users = require("./users")
} catch (err) {
    console.error(`No users found. Please add user using "npm run addUser -- <username> <password>"`)
    process.exit(1)
}

const User = {
    findById: (id, callback) => {
        process.nextTick(() => {
            let idx = id - 1
            if (users[idx]) callback(null, users[idx])
            else callback(new Error(`User ${id} does not exist`))
        });
    },
    findByUsername: (username, callback) => {
        process.nextTick(() => {
            for (let i = 0, len = users.length; i < len; i++) {
                let record = users[i]
                if (record.username === username) return callback(null, record)
            }
            return callback(null, null)
        })
    }
}

module.exports = passport => {
    passport.use(new Strategy((username, password, done) => {
        User.findByUsername(username, (err, user) => {
            if (err) {  // error finding user
                return done(null, false)
            }
            if (!user) {  // wrong username
                return done(null, false)
            }
            bcrypt.compare(password, user.hash, (err, match) => {
                if (err) {  // error decrypting
                    return done(null, false)
                }
                else if (!match) {  // wrong password
                    return done(null, false)
                }
                else {  // correct username and password
                    return done(null, user)
                }
            })
        })
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
    })
}