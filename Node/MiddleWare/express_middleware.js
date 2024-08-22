// middleware -> function that runs between the request and the response


// 1. Create an express server
const express = require('express');
const app = express();
const port = 3080;

// 2. start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Middleware to handle /favicon.ico requests
app.use('/favicon.ico', (req, res) => res.status(204).end());


// 3. Add a middleware function to log the request
app.use((req, res, next) => {
    console.log('New request');
    console.log(req.method, req.url, req.hostname, req.path);
    next();
}
);


// // Q: Can we use multiple app.use() functions?
//YES


// Another middleware function to log the time
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
}
);

app.use(middleWare1, middleWare2);
function middleWare1(req, res, next) {
    console.log('Middleware 1');
    next();
    console.log('Post Middleware 1');
}

function middleWare2(req, res, next) {
    console.log('Middleware 2');
    next();
}

// 4. Add a route to send a response
app.get('/', (req, res, next) => {
    console.log("First route");
    res.send('Home page');
});


// Create an object where key is m1, m2, and values are functions


// const middlewares= {
//     'm1': function (req, res, next) {
//         console.log('Middleware 1 inside object');
//         next();
//     },
//     'm2': function (req, res, next) {
//         console.log('Middleware 2 inside object');
//         next();
//     }
// }
// app.use(middlewares.m1, middlewares.m2);
// app.use(middlewares['m1'], middlewares['m2']);

// // HW: Q: create a new module, and import using require 









// // Q: Can we use multiple middleware functions in the single app.use()?
// app.use(middleWare1, middleWare2);


// Q: Convert the logging middleware and time middleware into a function and pass it to app.use()


// Q: Is the line after next() executed?
// Q: Is the line after sending the response is executed?