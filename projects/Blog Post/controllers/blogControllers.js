const BlogPost = require("../models/blogposts");



//get all blogs
const getBlogs = (req, res) => {
    //req.params.id is the ID passed in the request URL as a route parameter.
    //req.params is an object containing route parameters. If you have a route like /blog/:id, then req.params.id will contain the value of :id from the URL.
    BlogPost.find().sort({createdAt: -1})
        .then((result) => {
            console.log("RESULT K ANDR")
            res.render("blogs", {title: "All Blogs", blogs: result});
        })
        .catch((err) => {
            console.log("ERROR AA GAYA");
            res.render("fail", {title: "All Blogs"});
        })
};




//get by id
const getBlogById = (req, res) => {
    BlogPost.findById(req.params.id)
        .then((result) => {
            console.log("ID wala result")
            res.render("singleblog", {title: result.title, blog: result});
        })
        .catch(() => {
            console.log("ID wala error")
            res.status(404).render('error', { title: 'Blog Not Found' });
        });
};



//route to delete a blog
const deleteBlog = (req, res) => {
    BlogPost.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log(`Blog deleted: ${result.title}`);
            res.redirect("deleteSuccess");
        })
        .catch((err) => {
            console.log("Blog not deleted");
            res.render("fail", {title: "All Blogs"});
        });
};



//route to create a blog
const createBlog = (req, res) => {
    const blog = req.body;
    const blogpost = new BlogPost(blog);
    // blogpost.save()
    //     .then(() => {
    //         console.log("Blog saved");
    //         res.redirect("/success");
    //     })
    //     .catch((err) => {
    //         console.log("Blog not saved");
    //         res.redirect("/fail");
    //     });

    BlogPost.create(blog)
        .then((result) => {
            console.log(`New blog added: ${result.title}`);
            res.redirect("success");
        })
        .catch((err) => {
            console.log("Error creating blog:", err);
            res.redirect("fail");
        });
};



module.exports = {
    getBlogs, 
    getBlogById,
    createBlog,
    deleteBlog
};