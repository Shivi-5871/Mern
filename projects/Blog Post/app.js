const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const USERNAME = "shiviAgarwal";
const PASSWORD = "5871shivi";
const DATABASE_NAME = "BLOGPOSTS";
const dbURI = `mongodb+srv://${USERNAME}:${PASSWORD}@merncluster.qbcns.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=mernCluster`

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to the database");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to the databse");
    });



// MIDDLEWARES AND STATIC FILES WITH EXPRESS    
app.use(express.static("public"));   //isko sare middleware ke upar likhna hai
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set("view engine", "ejs");
//parsing the data from form
app.use(express.urlencoded({extended: true}));    
app.use(express.json());  //parse json data





app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});




//ROUTES
app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});


app.get("/blogs", (req, res) => {
    res.redirect("blogs");
});

//BLOG ROUTES
// app.use(blogRoutes);

//AUTH ROUTES
app.use("/auth", authRoutes)


app.get("/about", (req, res) => {
    res.render("about", {title: "About"});
});


app.get("/error", (req, res) => {
    res.render("error", {title: "Error"});
});




app.get("/login", (req, res) => {
    res.render("auth/login", {title: "Login"});
})

app.get("/logout", (req, res) => {
    res.render("auth/logout", {title: "Login"});
})

app.get("/signup", (req, res) => {
    res.render("auth/signup", {title: "Login"});
})




app.use((req, res) => {
    console.log("DEFAULT ERROR WALA");
    res.status(404).render("error", {title: "404"});
});