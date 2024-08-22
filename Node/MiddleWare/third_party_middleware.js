// 3rd party middleware
// morgan -> logger middleware
// npm install morgan
// Other popular middleware: body-parser, cookie-parser, express-session, cors, helmet, compression, etc.


// 1. Create an express server
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3040;

// 2. start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(morgan('tiny')); // we need to pass callback function

// input -> value -> string -> 'dev'
// if(value === 'dev') return function1;
// else if (value === 'tiny') return function2;
// else if (value === 'short') return function3;
// else if (value === 'combined') return function4;
// else return function5fetchcvcfbfvtngbdllihrivrdurrdghkffhdnbgenvv


// '1' -> 'one'
// '2' -> 'two'
// customFunction('1')

app.get('/', (req, res) => {
    res.send('Home page');
}
);

function customFunction(value){
    if(value === '1')
        return 'one';
    else if(value === '2')
        return 'two';
    else if(value === '3')
        return 'three';
    else
        return 'unknown';
}
// input - > value
// return -> string




// tiny, short, common, combined, dev