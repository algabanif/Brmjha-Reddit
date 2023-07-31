const express = require('express');
const app = express();
const port = 3001;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("./database");
const session = require("express-session");

// run server at http://localhost:3001/
const server = app.listen(port, () => console.log("Server listening on port "+port));

// setup pug
app.set("view engine", "pug");
app.set("views","views");

app.use(bodyParser.urlencoded({ extended: false }));

// path to css and js files
app.use(express.static(path.join(__dirname, "public")));

// sessions 
app.use(session({
    secret: "secretWord",
    resave: true,
    saveUninitialized: false
}))


// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use("/login", loginRoute);
app.use("/register", registerRoute);

// render home and check if login by middleware => routes login 
app.get("/", middleware.requireLogin, (req, res,next) => {

    var payload = {
        pageTitle: "Home",
        userLoggedIn:  req.session.user
    }

    res.status(200).render("home", payload);
})

