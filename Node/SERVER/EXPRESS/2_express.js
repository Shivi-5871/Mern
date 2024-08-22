const express = require("express");
const server = express();

server.listen(3040, "localhost", () => {
    console.log("Server started")
});

server.get('/', (req, res) => {
    console.log(req.url, req.method);  //load he hota rahega sirf ise run kiya tto
    res.sendFile("./files/index.html", {root: __dirname});
});

server.get('/about', (req, res) => {
    console.log(req.url, req.method);  //load he hota rahega sirf ise run kiya tto
    res.sendFile("./files/about.html", {root: __dirname});
});


//REDIRECTING IN EXPRESS
server.get('/aboutme', (req, res) => {
    console.log(req.url, req.method);  //load he hota rahega sirf ise run kiya tto
    res.redirect("/about");
});

server.use((req, res) => {
    res.sendFile("./files/error.html", {root: __dirname});
});