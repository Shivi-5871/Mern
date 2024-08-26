const express = require("express");
const cookieParser = require("cookie-parser");
const userController = require("../../controllers/userController");
const bodyParser = require("body-parser");
// const user = require("../models/user");

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


router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);



module.exports = router;