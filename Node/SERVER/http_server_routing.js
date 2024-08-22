// //creating a server using http module
const http = require("http");
const fs = require("fs");

// //SENDING HTML RESPONSE  => THIS IS SERVER-SIDE RENDERING

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  let path = "./files/error.html";

  switch (req.url) {
    case "/":
      path = "./files/index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path = "./files/about.html";
      res.statusCode = 200;
      break;

    default:
      path = "./files/error.html";
      res.statusCode = 404;
  }

  //sending a file as response
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 404;
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3010, "localhost", () => {
  console.log("server is listening on port 3010");
});

// res.setHeader('Content-type','text/plain');
// res.statusCode = 200;
// res.write('<h1> Hello,this is a response from the server </h1>');
// res.write('<h1> Hello,this is a response from the server </h1>');

// const fileName = './files/temp.html';
// fs.readFile(fileName,(err,data)=>{
//     if (err){
//         res.statusCode = 400;
//         console.log(err);
//         res.end('error  reading the file');
//     }
//     else{
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/html');
//         res.end(data);
//     }
// })
