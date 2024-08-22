const express = require("express");
const user = require("../models/user");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("auth/login", {title: "Login"});
});

router.get("/logout", (req, res) => {
    res.render("auth/logout", {title: "Logout"});
});    

router.get("/signup", (req, res) => {
    res.render("auth/signup", {title: "Signup"});
});    


module.exports = router;