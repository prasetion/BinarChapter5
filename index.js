const express = require("express")
const app = express()
const port = 3000

// set engine
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    console.log('Time:', Date.now())
    next()
})

// home
app.get("/", (request, response) => response.send("Home page"))

// game
app.get("/game", (request, response) => response.send("game page"))

app.get("/error", (req, res) => {
    iniError
})

// error handling, kalau misal endpoint gak ada
app.use(function(req, res) {
    res.status(404);
    res.json({
        status: "page gak ada bro!!",
    })
});

// error handling, kalau dari apps ada error
app.use(function(err, req, res, next) {
    console.log("ada error");
    res.status(500).json({
        status: "fail",
        error: err.message
    })
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))