//cookies are specific to url, they are sent to that particular url only not to the other domain requested

const express = require("express");
const app = express();
const port = 3040;


const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.listen(port, () => {
    console.log("Server started");
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/set-cookie', (req, res) => {
    console.log("Setting Cookie");
    const key = "user";
    const value = "Shivi";
    res.cookie(key, value);
    res.send("Cookie set");
});


app.get('/get-cookie', (req, res) => {
    console.log("Reading Cookie");
    const fname = req.cookies.user;
    res.send(`Cookie is read: ${fname}`);
});


