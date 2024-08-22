// parse incoming request bodies in a middleware before your handlers, specifically for requests that are encoded in application/x-www-form-urlencoded,
// extended: true is used to parse the nested objects
// extended: false is used to parse the string or array

// As of Express 4.16.0, you don't need to install the body-parser package separately, because Express includes it. You can directly use express.urlencoded() instead:
const blogController = require("../controllers/blogControllers")
const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();


router.get("/newblog", (req,res) => {
    res.render("newblog", {title: "NewBlog"});
});

router.get("/success", (req, res) => {
    res.render("success", {title: "Blogs"});
});

router.get("/fail", (req, res) => {
    res.render("fail", {title: "Blogs"});
});




console.log("BLOGROUTES se pehele wala code");

router.use(bodyParser.urlencoded({ extended: true }));

//ROUTERS FOR THE BLOGCONTROLLER FILE
router.get("/", blogController.getBlogs);

router.get("/id/:id", blogController.getBlogById);

router.delete("/id/:id", blogController.deleteBlog);

router.post("/", blogController.createBlog);


console.log("BLOGROUTES ke baad wala code");

module.exports = router;