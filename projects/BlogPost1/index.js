const express = require("express");
const morgan = require('morgan');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const blogpostRoutes = require('./routes/blogRoutes');

const USERNAME = "shiviAgarwal";
const PASSWORD = "5871shivi";
const DBNAME = "merndb"
const dbURI = `mongodb+srv://${USERNAME}:${PASSWORD}@merncluster.qbcns.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=mernCluster`
const port = 3050;

const app = express();

console.log("Hello1");
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.json());
app.set('views','views');


app.use(express.urlencoded({extended: true}));

mongoose.connect(dbURI)
    .then(() => {
      console.log("Connected: ");
      app.listen(port, () => {
        console.log("Server is listening");
      })
    })
    .catch((err) => {
        console.log("Error while connecting");
        process.exit(1); // Exit the process with a failure code
    })

  

//static files and middleware

app.set('view engine', 'ejs');
console.log("NO")



app.use((req, res, next) => {
  res.locals.path = req.path;
  console.log("Hello2");
  next();
});



app.get('/', (req, res) => {
  res.render('index', {title: "Home Page"});
});

app.use('/blogs', blogpostRoutes);

app.get('/about', (req, res) => {
    res.render('about', {title: "About Page"});
});


app.use((req, res) => {
  console.log("Hello4");
  res.status(404).render('error', {title: "404 Page"});
});


// app.get('/singleBlog' ,(req, res) => {
//   res.render('singleBlog', {title: "Single Blog Page"});
// });



