// //creating a server using http module
// const http = require('http');

// //SENDING HTML RESPONSE

// // const server = http.createServer((req, res) => {
// //     console.log(req.url, req.method);
// //     res.setHeader('Content-Type', 'text/html');
// //     res.statusCode = 200;
// //     // res.write('<h1>Hello, this is response from server</h1>');
// //     // res.end();
// //     res.end("<h1>Hello, this is response from server</h1>");
// // });



// // //sending a plain text response
// // const server = http.createServer((req, res) => {
// //     console.log(req.url, req.method);
// //     res.setHeader('Content-Type', 'text/plaintxt');  //browser converts it into html content type
// //     res.statusCode = 200;
// //     res.end("Hello, this is response from server");
// // });



// const fs = require('fs');

// //sending a file as response
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     const existingFile = './views/httpFile.html';
//     fs.readFile(existingFile, (err, data) => {   //it is an async function
//         if(err) {
//             res.statusCode = 404;
//             console.log(err);
//             res.end("Error: File not found");
//         }
//         else {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end(data);
//         }
//     });
// });

// //listening to the server and running it on port 3010
// server.listen(3010, 'localhost', () => {
//     console.log("Server is listening on port 3000");
// });