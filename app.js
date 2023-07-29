const express = require('express');
const app = express();
const port = 3001;
const middleware = require('./middleware');

const server = app.listen(port, () => console.log("Server listening on port "+port));

app.set("view engine", "pug");
app.set("views","views");

// Routes
const loginRoute = require('./routes/loginRoutes');
app.use("/login", loginRoute);


app.get("/", middleware.requireLogin, (req, res,next) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})
