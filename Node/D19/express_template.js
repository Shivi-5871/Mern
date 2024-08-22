const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3040;

app.listen(port, () => {
    console.log("Server is running");
});

app.set('view engine', 'ejs')

app.set("views", "views");

const students = [];

app.get('/', (req, res) => {
    // let variable_1 = "Hello from Index";
    // res.render('index', {variable_1 : variable_1, title : "Home Page"});

    //another method to run the above object result when value and key are same is by writing only once
    // res.render('index', {variable_1, title : "Home Page"});
    res.render('index', {students, title : "Home Page"});
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.get('/about', (req, res) => {
    res.render('about', {title : "About_Page"});
});

app.get('/students', (req, res) => {
    res.render('students', {title : "Student_Page"});
});

app.use((req, res) => {
    res.status(404).render('error', {title : "Error__Page"});
});