const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/auth/authRoutes");
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


//importing dotenv and configuring it
// const dotenv = require("dotenv");
// dotenv.config();

require("dotenv").config();




const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
console.log(USER_NAME, PASSWORD, DATABASE_NAME);
const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.qbcns.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=mernCluster`




const port = 3080;
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
    
    
    
const app = express();
// MIDDLEWARES AND STATIC FILES WITH EXPRESS    
app.use(express.static("public"));   //isko sare middleware ke upar likhna hai
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("views", "views");


//parsing the data from form
app.use(express.urlencoded({extended: true}));    
app.use(express.json());  //parse json data




app.use(cookieParser());

function checkUser(req, res, next) {
    const token = req.cookies.authtoken;
    console.log("Token :", token);
    if(token) {
        jwt.verify(token, "VeryComplexSecret", (err, decodedToken) => {
           if(err) {
            res.locals.user = null;
           } 
           else {
            res.locals.user = decodedToken;
           };
        });
    }
    else {
        res.locals.user = null;
    };
    next();
};



app.use(checkUser);




//morgan(dev) middleware
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});


//ROUTES
app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

//AUTH ROUTES
app.use("/auth", authRoutes)

//BLOG ROUTES
app.use("/blogs", blogRoutes);



app.get("/about", (req, res) => {
    res.render("about", {title: "About"});
});


app.get("/error", (req, res) => {
    res.render("error", {title: "Error"});
});









app.use((req, res) => {
    console.log("DEFAULT ERROR WALA");
    res.status(404).render("error", {title: "404"});
});