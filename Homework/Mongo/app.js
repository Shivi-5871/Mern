const mongoose = require("mongoose");

const USER_NAME = "ShiviAgarwal";
const PASSWORD = "shivi5871";
const DB_NAME = "DBmern";

const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.qbcns.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernCluster`

const promiseObj = mongoose.connect(dbURI);

promiseObj
    .then((result) => {
        console.log("Db connected");
    })
    .catch((err) => {
        console.log("Error connecting to db");
        console.log(err);
    });

console.log("Post connecting to the db");

// mongoose.connection.close();

const schema = mongoose.Schema;
const InfoSchema = new schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    country: {type: String, required: true},
    state: {type: String, required: true}
}, {timestamps: true})

const Info = mongoose.model("info", InfoSchema, "information");

//Performing CRUD Operations
// const selfInfo = new Info({
//     name: "Shivi Agarwal",
//     age: 21,
//     country: "India",
//     state: "Uttar Pradesh"
// });

// selfInfo.save()
//     .then((result) => {
//         console.log("Saved");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error")
//         console.log(err.message);
//     })

// console.log("Post saving the info");



//find operations for all

// Info.find()
//     .then((result) => {
//         console.log("Find block");
//         console.log("All blog posts");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error Fetching all blog posts");
//     })


// FINDING AN iNFO USING ID
// console.log("Fetching a single information block with id");
// Info.findById("66bb7e65562854e58630e6d5")
//     .then((result) => {
//         console.log("Single info block");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error while fetching info");
//     })












//searching a document using query in find method
console.log("Fetching a single information block with name using query.....");
// Info.findOne("66bb7e65562854e58630e6d5")
Info.findOne({_id: mongoose.Types.ObjectId("66bb7d45337f504cd052d2dc") })
    .then((result) => {
        console.log("Single info block");
        console.log(result);
    })
    .catch((err) => {
        console.log("Error while fetching info");
    })









    

//sorting
// Info.find().sort({createdAt : -1})
//     .then((result) => {
//         console.log("Sorted : \n");
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("Error while sorting");
//         console.log(err);
//     });


setTimeout(() => {
    console.log("Closing the connection");
    mongoose.connection.close();
}, 5000);