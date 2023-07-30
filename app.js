const express = require('express');
const app = express();
const port = 3001;
const middleware = require('./middleware');
const path = require('path');


// run server at http://localhost:3001/
const server = app.listen(port, () => console.log("Server listening on port "+port));

// setup pug
app.set("view engine", "pug");
app.set("views","views");

// path to css and js files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const loginRoute = require('./routes/loginRoutes');
app.use("/login", loginRoute);


// render home and check if login by middleware => routes login 
app.get("/", middleware.requireLogin, (req, res,next) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})
