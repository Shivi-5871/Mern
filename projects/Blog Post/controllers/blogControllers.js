const BlogPost = require("../models/blogposts");



//get all blogs
const getBlogs = (req, res) => {
    const userIdFromToken = res.locals.user.id;
    //req.params.id is the ID passed in the request URL as a route parameter.
    //req.params is an object containing route parameters. If you have a route like /blog/:id, then req.params.id will contain the value of :id from the URL.
    BlogPost.find({author: userIdFromToken}).sort({createdAt: -1})
        .then((result) => {
            console.log("RESULT K ANDR")
            res.render("blogs/blogs", {title: "All Blogs", blogs: result});
        })
        .catch((err) => {
            console.log("ERROR AA GAYA");
            res.render("blogs/fail", {title: "All Blogs"});
        })
};




//get by id
const getBlogById = (req, res) => {
    BlogPost.findById(req.params.id)
        .then((result) => {
            console.log("Getting blog by Id")
            console.log(result);
            res.render("blogs/singleblog", {title: result.title, blog: result});
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
            res.redirect("/blogs/deleteSuccess")
        })
        .catch((err) => {
            console.log("Blog not deleted");
            res.render("blogs/fail", {title: "All Blogs"});
        });
};



//route to create a blog
const createBlog = (req, res) => {
    // const blog = req.body;
    // const blogpost = new BlogPost(blog);
    // blogpost.save()
    //     .then(() => {
    //         console.log("Blog saved");
    //         res.redirect("/success");
    //     })
    //     .catch((err) => {
    //         console.log("Blog not saved");
    //         res.redirect("/fail");
    //     });



    const userIdFromToken = res.locals.user.id;

    const blog = {
        title: req.body.title,
        summary: req.body.summary,
        content: req.body.content,
        author: userIdFromToken
    }
    BlogPost.create(blog)
        .then((result) => {
            console.log(`New blog added: ${result.title}`);
            res.redirect("blogs/success");
        })
        .catch((err) => {
            console.log("Error creating blog:", err);
            res.redirect("blogs/fail");
        });
};



module.exports = {
    getBlogs, 
    getBlogById,
    createBlog,
    deleteBlog
};