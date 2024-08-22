const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const blogpost = new Schema({
    title: {type: String, required: true},
    summary: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
}, {timestamps: true});

const blogCollection = "blogposts";
const BlogPost = mongoose.model("BlogPost", blogpost, blogCollection);

module.exports = BlogPost;