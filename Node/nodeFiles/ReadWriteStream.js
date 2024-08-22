const fs = require('fs');

// // //READ STREAM
// //by default in mac chunk is of 16kb, it is different in windows





// // const fileName = './files/large_files.txt';
// // const readStream = fs.createReadStream(fileName);
// // readStream.on('data', (chunk) => {    //it is an event listener
// //     console.log("\n\n****************New Chunk Received*********************");
// //     console.log(chunk);
// // }); 




// //Ques: using readstream, read a file and display it in utf

// const fileName = './files/large_files.txt';
// // const readStream = fs.createReadStream(fileName);
// // const readStream = fs.createReadStream(fileName, 'utf8');
// // const readStream = fs.createReadStream(fileName, {encoding : 'utf8', highWaterMark : 1024});  //another method for endcoding the dta into utf8 and "highwatermark" is used to set the buffer size
// const readStream = fs.createReadStream(fileName, {encoding : 'utf8'});
// let counter = 0;
// readStream.on('data', (chunk) => {    //it is an event listener
//     console.log("\n\n****************New Chunk Received*********************");
//     console.log(chunk);
//     console.log("counter", ++counter)
//     // console.log(chunk.toString());

// });











// WRITE STREAM
// const writeFile = './files/write_file.txt';
// const writeStream = fs.createWriteStream(writeFile);
// writeStream.write("Hello1, this is a write stream\n");
// writeStream.write("Hello1, this is another line.\n");
// writeStream.write("Hello1, this is another line.\n");
// writeStream.write("Hello1, this is another line.\n");
// writeStream.write("Hello1, this is another line.\n");

//it will overwrite the old content i.e. given below
// writeStream.write("Hello, this is a write stream\n");
// writeStream.write("Hello, this is another line.\n");
// writeStream.write("Hello, this is another line.\n");
// writeStream.write("Hello, this is another line.\n");
// writeStream.write("Hello, this is another line.\n");


//ques: write a function to read from a file using readstream and write it to another using writestream
// const fileName = './files/large_files.txt';
// const readStream = fs.createReadStream(fileName, {encoding: 'utf8'});
// const readStream = fs.createReadStream(fileName);      //doesnt matter ki utf8 mei bheje ya nhi, same he answer aayega
// const writeFile = './files/write_file.txt';
// const writeStream = fs.createWriteStream(writeFile);
// readStream.on('data', (chunk) => {    //it is an event listener
//     writeStream.write(chunk);
// }); 




// PIPE  : upr wale code ko chhote tareeke se likhte hai

const fileName = './files/large_files.txt';
const readStream = fs.createReadStream(fileName, {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./files/write_file.txt');
readStream.pipe(writeStream)

