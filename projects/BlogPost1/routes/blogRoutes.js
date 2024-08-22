const express = require("express");
const bodyParser = require("body-parser");
const blogController = require("../controller/blogController")

const router = express.Router();

router.get('/blogs', (req, res) => {
  const blogs = req.body;
  
  console.log("Hello from blogs");
  const summary = "HIIIIIIIIII";
  res.render('blogs/blogs', {title: "All Blogs Page", blogs});
});


router.get('/newblog', (req, res) => {
  res.render('blogs/newblog', {title: "NewBlog Page"});
});


router.get('/success', (req, res) => {
  res.render('blogs/success', {title: "Success Page"});
});


router.get('/fail', (req, res) => {
  res.render('blogs/fail', {title: "Failed Page"});
});


// Middleware to parse form data
router.use(bodyParser.urlencoded({ extended: true }));


// GET request to view all blogs
router.get('/', blogController.blog_get);


// New route to view a single blog post
router.get('/id/:id', blogController.getById);



// POST request to create a new blog
router.post('/', blogController.postBlog);


// DELETE request to delete a blog
router.delete('/id/:id', blogController.deleteBlog);


module.exports = router;





// function deleteBlog (req, res) {
//     BlogPost.findByIdAndDelete(req.params.id)
//         .then((result) => {
//             res.redirect('blog/success');
//         })
//         .catch((error) => {
    //             res.redirect('blog/fail');
    //     });
// };



// function postBlog(req, res) {
    //     const blog = req.body;
    //     const blogpost = new BlogPost(blog);
//     blogpost.save()
//         .then((result) => {
//             console.log(`New blog added: ${result.title}`);
//             res.redirect('blog/success');
//         })
//         .catch((error) => {
    //             res.redirect('blog/fail');
    //         })
// };
// function getById(req, res){
    //     BlogPost.findById(req.params.id)
    //         .then((blog) => {
//             res.render('blog/singleBlog', { title: blog.title, blog });
//         })
//         .catch((error) => {
    //             res.status(404).render('error', { title: 'Blog Not Found' });
    //         })
    
    
// function blog_get(req, res) {
//     BlogPost.find().sort({ createdAt: -1 })
//         .then((result) => {
//             res.render('blog/blogs', { title: 'All blogs', blogs: result});
//         })
//         .catch((error) => {
//             res.redirect('/error');
//         });
// };

// New route to view a single blog post