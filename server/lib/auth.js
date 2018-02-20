const { Strategy } = require('passport-local')
const records = require('./users')

User = {
  findById: (id, callback) => {
    process.nextTick(() => {
        let idx = id - 1
        if (records[idx]) callback(null, records[idx])
        else callback(new Error(`User ${id} does not exist`))
    });
  },
  findByUsername: (username, callback) => {
    process.nextTick(() => {
        for (let i = 0, len = records.length; i < len; i++) {
            let record = records[i]
            if (record.username === username) return callback(null, record)
        }
        return callback(null, null)
    })
  }
}

module.exports = passport => {

  passport.use(new Strategy((username, password, done) => {
      User.findByUsername(username, (err, user) => {
        if (!user) return done(null, false)
        if (user.password != password) return done(null, false)
        return done(null, user)
      })
    }))

    passport.serializeUser((user, done) => {
        console.log('Serialized');
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        console.log('Deserialized');
      User.findById(id, (err, user) => done(err, user))
    })

}