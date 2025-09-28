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
// console.log(USER_NAME, PASSWORD, DATABASE_NAME);
const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.qbcns.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=mernCluster`

const port = process.env.PORT || 3080;


const app = express();
mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });




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
















// Problem Statement: We need to display only the blogs created by the logged in user.
// 1. Map the user to the blog post Document.
// 1.1 We already have author field in the blogpost schema. Can we use that?
// 1.2 What else can we use ? email, name, id ?
// Once we have the key final, we need to update the schema
// 2. Update the Schema to have a reference to the User Schema
// 2.1 Do we need to update the Model?
// 3. Next , we should update the blog with the key before saving it to the database
// 3.1 In order to update the blog with the key (ID), first we need to get info about the logged in user
// 3.2 Can we use res.locals.user to get the user info?
// Does it have the user ID ? -> NO
// Can we add the userID to the res.locals.user object? Where does this value come from?
// token ? cookies?
// We need to update the token generation logic to include the user ID
// 4. Update the token generation logic to include the user ID
// 4.1 We need to update the signup route to include the user ID in the token
// 4.2 We need to update the login route to include the user ID in the token
// 5. Once, we have added the ID, we need to read ID and save in the res.locals.user object
// 6. Before saving the blog, we need to update the blog object with the user ID
// 7. Now, in order to display the blogs, we need to filter the blogs based on the user ID
// 7.1 Where do we get the user ID? 