module.exports = (router, routes) => {
    routes.forEach(route => {
        router.use("/api/" + route, require("./" + route))
    })
}