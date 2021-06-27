const express = require("express")
const routes = express.Router()
const myData = require('./user.json')

routes.post("/", (req, res) => {
    console.log("add data user");
})

module.exports = routes;