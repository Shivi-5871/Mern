const express = require("express");
const app = express();
const morgan = require("morgan");


/* In the context of Morgan middleware, 'dev' is a logging format that provides concise and colored output, which is particularly useful during development.

What 'dev' Format Logs:

1- HTTP Method (e.g., GET, POST)
2- Request URL (the path of the request)
3- HTTP Status Code (the response code)
4- Response Time (how long it took to process the request) */
// app.use(morgan('combined'));
// app.use(morgan('tiny'));
// app.use(morgan('short'));
// app.use(morgan('common'));
app.use(morgan('dev'));

//define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/contact', (req, res) => {
    res.send('Contact Us');
});

app.listen(3040, () => {
    console.log("Server started");
});