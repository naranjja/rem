const mongo = require("mongodb")

module.exports = {
    parseRegExpInQuery: (query) => {
        let newQuery = {}
        for (key in query) {
            if (~query[key].indexOf("/")) {
                newQuery[key] = new RegExp(query[key].replace(/\//g, ""))
            } else {
                newQuery[key] = query[key]
            }
        }
        return newQuery
    },
    find: (collection, query, show) => {
        query = module.exports.parseRegExpInQuery(query)
        return new Promise((resolve, reject) => {
            mongo.connect(process.env.DB_URI + process.env.DB_NAME)
                .then(client => {
                    resolve(
                        client
                        .db(process.env.DB_NAME)
                        .collection(collection)
                        .find(query)
                        .project(show)
                    )
                })
                .catch(err => reject(err))
        })
    },
    select: (collection, query, show) => {
        return new Promise((resolve, reject) => {
            module.exports.find(collection, query, show)
                .then(records => {
                    records.toArray((err, result) => {
                        if (err) reject(err)
                        else resolve(result)
                    })
                })
                .catch(err => reject(err))
        })
    },
    count: (collection, query) => {
        return new Promise((resolve, reject) => {
            module.exports.find(collection, query, { _id: 1 })
                .then(records => {
                    records.count((err, result) => {
                        if (err) reject(err)
                        else resolve(result)
                    })
                })
                .catch(err => reject(err))
        })
    }
}