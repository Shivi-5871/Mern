//browser contains cache of the already opened page and will show 304 status code instead of 200.


const express = require("express");
const server = express();

server.listen(3050, 'localhost', () => {
    console.log("Server is running....");
});

server.get('/', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile("./files/blogFiles/home.html", {root: __dirname});
});

server.get('/about', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile("./files/blogFiles/about.html", {root: __dirname});
});

server.get('/error', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile("./files/blogFiles/error.html", {root: __dirname});
});

server.get('/blogs', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile("./files/blogFiles/blogs.html", {root: __dirname});
});

server.get('/newblog', (req, res) => {
    console.log(req.url, req.method);
    res.sendFile("./files/blogFiles/newblog.html", {root: __dirname});
});

server.use((req, res) => {
    console.log(req.url, req.method);
    res.sendFile("./files/blogFiles/error.html", {root: __dirname})
})