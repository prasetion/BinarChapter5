// const express = require("express")
// const myData = require('./user.json')

// const routes = express.Router()

// const getData = routes.get("/api/v1/users", (req, res) => {
//     console.log("get all data user");
//     res.status(200).json(myData);
// })

// const postData = routes.post("/api/v1/posts", (req, res) => {
//     console.log("post data user");
// })


// routes.post("/", (req, res) => {

// })



// module.exports = routes;

// const myRouter = express.Router();

// module.exports = function(app) {

//     app.get('/api/v1/users', function(req, res) {
//         console.log("get all data user");
//     });

//     //other routes..
// }

module.exports = function(app) {
    app.get('/index', function(req, res) {
        res.render('index', { title: 'index' });
    });

    app.get('/contactus', function(req, res) {
        res.render('contactus', { title: 'contactus' });
    });
}