const User = require("../models/user");
const jwt = require("jsonwebtoken");



function getToken(email, name) {
    const secret = "VeryComplexSecret";
    const token1 = jwt.sign({email}, secret);
    const token2 = jwt.sign({name}, secret);
    return token1, token2;
}





//Signup Route
const signup = (req, res) => {
    const {name, email, password} = req.body;
    console.log(req.body);

    User.create({name, email, password})
        .then(user => {
            console.log("User created successfully");
            const token = getToken(user.email, user.name);
            res.cookie("authtoken", token);
            res.redirect("/blogs");
        })
        .catch(err => {
            console.log("Error creating user: ", err.message);
            res.status(400).send("Error creating user");
        });
};




//Login Route
const login = (req, res) => {
    const{name, email, password} = req.body;

    User.findOne({email})
        .then(user => {
            if(user.password !== password) {
                console.log("Enter the correct password");
                res.status(400).send("Enter the correct password");
            }
            else{
                console.log("User found");
                const token = getToken(user.email, user.name);
                res.cookie('authtoken', token);
                res.redirect("/blogs");
            }
        })

        .catch(err => {
            console.log(err);
            res.status(400).send("Failed to login");
        });
};



const logout = (req, res) => {
    console.log("Logout route")
    res.clearCookie("authtoken");
    res.redirect("/");
};


module.exports = {signup, login, logout};

