// console.log("Hello");
// console.log(typeof global);

// console.log(global.setTimeout)

// // setTimeout(() => {
// //     console.log("SetTimeout")
// // }, 1000);

// console.log("Current Working Direcotory: " + global.process.cwd());

// console.log(__dirname);
// // console.log(__filename);

// let varName;
// console.log(varName);  //undefined
// // console.log(document)   //will give reference error



//module is a special object that is available in every.........?
// console.log(module);
// console.log(module.children);


// let importedFile = require('./index1');      //we are importing index1 file in this file with the help of require
// console.log(peoples);      //REFERENCE ERROR, when not exported
// console.log(importedFile.peoples);  //UNDEFINED, when not exported


// console.log(importedFile);
// importedFile.sayHello();
// console.log(typeof importedFile);    //object




// const {importedFile} = require('./index1');      //{importedFile} here is used to define the deconstructer

//YE ANSWERS NHI DE RAHA EK BAAR DOBARA DEKHNA HAI KI KYU NHI DE RHA

// const {peoples, ages} = importedFile;
// console.log(peoples);
// console.log(ages);



const os = require("os");

console.log(os.userInfo());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());