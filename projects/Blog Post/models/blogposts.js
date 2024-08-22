//Mongoose is an ODBJECT DATA MODELING library for MongoDb and Node.js
//Schemas define the structure of the documents within a collection in MongoDB, specifying what fields the documents should have, their types, and any constraints or default values.


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogpost = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {timestamps: true});

const blogpostCollectionname = "blogposts";
const Blogpost = mongoose.model("Blogpost", blogpost, blogpostCollectionname);

module.exports = Blogpost;