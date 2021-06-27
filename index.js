const express = require("express")
const app = express()
const port = 3000

const user = require("./api/user")
    // const addUser = require("./api/add_user")

// set view engine
app.set('view engine', 'ejs');

app.use("/public", express.static(__dirname + "/public"));

app.use(express.json())

app.use(function(req, res, next) {
    console.log('Time:', Date.now())
    next()
})

// api
app.use("/api/v1", user)

// home
app.get("/", (request, response) => response.render("index"))

// game
app.get("/game", (request, response) => response.render("game"))

// login
app.get("/login", (request, response) => response.render("login"))

// register
app.get("/register", (request, response) => response.render("register"))

// ini error
app.get("/error", (req, res) => {
    iniError
})

// kalau misal endpoint gak ada
app.use(function(req, res) {
    res.status(404);
    res.send({
        status: "page gak ada bro!!",
    })
});

// error handling, kalau dari apps ada error
app.use(function(err, req, res, next) {
    console.log("ada error");
    res.status(500).send({
        status: "fail",
        error: err.message
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))