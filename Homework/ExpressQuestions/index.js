const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3050;

app.listen(port, () => {
    console.log("Sever is listening");
});

app.set('view engine', 'ejs');
app.set('views', 'views');


//Looping
app.get('/', (req, res) => {
    res.render("looping");
});


//Condition Statement
function greeting() {
    const hours = new Date().getHours();
    if(hours < 12) {
        return "Good Morning";
    }
    else if(hours < 18) {
        return "Good Afternoon";
    }
    else { 
        return "Good Evening"
    }
};

app.get('/condition', (req, res) => {
    const greetings = greeting();
    res.render("condition", {greetings});
});


//Array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
app.get("/array", (req, res) => {
    res.render('array', {fruits});
});


//UserInfo -> Objects
app.get("/userInfo", (req, res) => {
    const users = [ 
        {name: "Shivi", age: 21},
        {name: "Prakriti", age: 20},
        {name: "Aanya", age: 20}
    ];
    res.render('userInfo', {users});
});


//FORM


//Dynamic Content
app.get('/dynamicContent', (req, res) => {
    const user = "Shivi";
    isLoggedIn = false;
    res.render('dynamicContent', {user, isLoggedIn});
});


//NESTED LOOPS
app.get('/nestedLoop', (req, res) => {
    res.render('nestedLoop')
})

//Error page
app.use((req, res) => {
    res.status(404).render('error');
});