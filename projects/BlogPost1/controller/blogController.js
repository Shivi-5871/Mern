const BlogPost = require('../models/blogpost');


// blog_index_get
const blog_get = (req, res) => {
    BlogPost.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/blogs', { title: 'All blogs', blogs: result});
        })
        .catch((error) => {
            res.redirect('blogs/fail');
        });
};


// blog_id_get
const getById = (req, res) => {
    BlogPost.findById(req.params.id)
        .then((blog) => {
            res.render('blogs/singleBlog', { title: blog.title, blog });
        })
        .catch((error) => {
            res.status(404).render('error', { title: 'Blog Not Found' });
        })
};

// blog_create_post
const postBlog = (req, res) => {
    const blog = req.body;
    const blogpost = new BlogPost(blog);
    blogpost.save()
        .then((result) => {
            console.log(`New blog added: ${result.title}`);
            res.redirect('blogs/success');
        })
        .catch((error) => {
            res.redirect('blogs/fail');
        });
    console.log(`New blog added: ${blog.title}`);
};

// blog_delete
const deleteBlog = (req, res) => {
    BlogPost.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.redirect('blogs/success');
        })
        .catch((error) => {
            res.redirect('blogs/fail');
    });
};



module.exports = {
    blog_get,
    getById,
    postBlog,
    deleteBlog
}
