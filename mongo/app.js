const mongoose = require("mongoose");

const userName = "shiviAgarwal";
const password = "5871shivi";
const dbName = "merndb"

const dbURI = `mongodb+srv://${userName}:${password}@merncluster.qbcns.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=mernCluster`;

// const promiseObj = mongoose.connect(dbURI);

// promiseObj
//     .then((result) => {
//         console.log("Connected to the DB")
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// console.log("Post connecting to the database.");


mongoose.connect(dbURI)
    .then((result) => {
        console.log("Connected to the DB")
    })
    .catch((err) => {
        console.log(err);
    });

console.log("Post connecting to the database.");
// mongoose.connection.close();

//Command to close the connection?        mongoose.connection.close()
//return method of connect?    PROMISE



//create a shcema for blog post
// const schema = mongoose.Schema;
//what does it return?   CLASS
// const blogPostSchema = new schema({
//     title: {type: String, required: true},
//     summary: {type: String, required: true},
//     content: {type: String, required: true},
//     author: {type: String, required: true},
// }, {timestamps: true});


//2. create a model for blogpost
//2.1 define the collection name(plural)
//mongoose.model() -> returns a class which represents a collection
//arguments -> modelName, schema, collections


// const BlogPost = mongoose.model('blog', blogPostSchema, 'blogposts');    //'blogposts' is the collections(table) name



//typeof BlogPost = function(class) -> return value of model method


//CRUD  Operations
//3.0 Create a new blog post(document) annd save it to the database 
// const newBlog = new BlogPost({
    //     title: "First Post",
    //     summary: "Summary",
    //     content: "Content",
    //     author: "Shivi Agarwal"
    // });
    
// newBlog.save()
//     .then((result) => {
    //         console.log("Saved")
    //         console.log(result);
    //     })
    //     .catch((err) => {
        //         console.log("Error")
        //         console.log(err);
        //     });
        
        // console.log("Post saving the blog");
        
        
        //find method
        // BlogPost.find()
        //     .then((result) => {
            //         console.log("All blog posts");
//         console.log(result);
//     })
//     .catch((err) => {
    //         console.log("Error Fetching all blog posts");
    //     })
    
    
    
    //FINDING A BLOG USING ID
    // console.log("Fetching a single blog with id");
    // BlogPost.findById("66bb2e00ede4c5cd07dc0921")
    //     .then((result) => {
        //         console.log("Single blog post");
//         console.log(result);
//     })
//     .catch((err) => {
    //         console.log("Error while fetching post");
    //     })
    
    

    
    //UPDATING A BLOG POST
    // console.log("Updating a blog post");
    // BlogPost.findByIdAndUpdate("66bb2e18e3101b44cc4cdaa6", {title: "Updated title_2"})
    //     .then((result) => {
        //             console.log("Updated blog post");
        //             console.log(result);
        //         })
        //         .catch((err) => {
            //             console.log(err);
            //         })
            
            
            
            // console.log("Deleting a blog post");
            // BlogPost.findByIdAndDelete("66bb2e18e3101b44cc4cdaa6")
//     .then((result) => {
//             console.log("Deleted blog post");
//             console.log(result);
//         })
//         .catch((err) => {
    //             console.log(err);
//         })



//sorting 
// BlogPost.find().sort({createdAt : -1})
//     .then((result) => {
    //         console.log("Sorted : \n");
    //         console.log(result);
    //     })
    //     .catch((err) => {
//         console.log("Error while sorting");
//         console.log(err);
//     });



//100 blog posts through for loop

const schema = mongoose.Schema;


// const blogPostSchema = new schema({
//     title: {type: String, required: true},
// }, {timestamps: true});

// const BlogPost = mongoose.model('blog', blogPostSchema, 'blogposts');    //'blogposts' is the collections(table) name

// for(let i = 0; i <= 99; i++) {
//         const newBlog = new BlogPost({
//             title: "title" + i
//         });

//         newBlog.save()
//             .then((result) => {
//                 console.log("Saved")
//                 console.log(result);
//             })
//             .catch((err) => {
//                 console.log("Error")
//                 console.log(err);
//             });
// }





setTimeout(() => {
    console.log("Closing the connection")
    mongoose.connection.close();
}, 10000);