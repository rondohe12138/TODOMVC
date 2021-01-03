const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const getModel = require("./nodejsmodel");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("ejs")._express);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const user = getModel("User");

function isLogin(req, res, next) {
    const { username } = req.cookie;
    if (username) {
        next();
    } else {
        res.redirect("/login");
    }
}

app.get("/login", function(req, res) {
    res.render("login");
})
app.post("/login", function(req, res) {
    let { username, password } = req.body;
    password = crypto.createHmac("md5", "cyl").update(password).digest("hex");
    user.findOne({ username }, function(err, doc) {
        if (err) {
            res.redirect("/register");
        }
        if (doc) {
            if (doc.password === password) {
                res.cookie("username", username);
                res.redirect("./htmlmodule/TODOMVC/todosapp/public/index");
                res.end;
            } else {
                res.render("render");
            }
        } else {
            res.redirect("/register");
        }
    })
})

app.get("/register", function(req, res) {
    res.render("register");
})
app.post("/register", function(req, res) {
    let { username, password } = req.body;
    password = crypto.createHmac("md5", "cyl").update(password).digest("hex");
    user.create({ username, password }, function(err, doc) {
        if (err) {}
        if (doc) {
            res.cookie("username", username);
            res.redirect("/login");
            res.end();
        }
    })
})

app.get("/htmlmodule/TODOMVC/todosapp/public/index", is.Login, function(req, res) {
    const { username } = req.cookies;
    res.render("/htmlmodule/TODOMVC/todosapp/public/index", { username });
})

app.get("/", isLogin, function(req, res) {
    res.redirect("login");
})

app.listen(8080, () => {
    console.log("http://localhost:8080已经打开")
})