//File System Module

const fs = require('fs');
const {readfile} = require('fs');
const existingFile = './files/existingFile.txt';


//reading a file
fs.readFile(existingFile, 'utf8', (err, data) => {   //it is an async function
    console.log("Inside the callback function")
    if(err) {
        console.log("Error: ", err);
    }
    else {

        console.log("Type of data: ", typeof data);
        console.log("data: ", data);
        console.log("data: ", data.toString());
    }
});

console.log("After reading the file")



// const content = "Hello123";   //file gets overwritten if content changed and executed
// const  filename = "./files/new_file.txt";

// fs.writeFile(filename, content, (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log("File written successfully");
//     }
// });

// (fs.existsSync(filename));   //for file present or not


