// npm install faker
const faker = require("faker");
const mongoose = require("mongoose");
const Blogpost = require("../models/blogposts");

const USERNAME = "shiviAgarwal";
const PASSWORD = "5871shivi";
const DATABASE_NAME = "BLOGPOSTS";
const dbURI = `mongodb+srv://${USERNAME}:${PASSWORD}@merncluster.qbcns.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=mernCluster`

mongoose.connect(dbURI)
    .then(() => {
        console.log("Connected to the database");
        })
    .catch(() => {
        console.log("Error connecting to the databse");
    });


// Helper function to capitalize the first letter of each word in a string
function capitalizeFirstLetterOfEachWord(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

for(let i = 0; i < 100; i++) {
    let title = faker.lorem.words(5);
    title = capitalizeFirstLetterOfEachWord(title); // Capitalize the first letter of the title
    const summary = capitalizeFirstLetter(faker.lorem.words(10));
    
    // Generate paragraphs with more words by increasing the number of sentences per paragraph
    const paragraphs = Array.from({ length: 25 }, () => faker.lorem.sentences(10)).join('\n\n'); // 10 sentences per paragraph
    const content = paragraphs.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join(''); // Wrap each paragraph in <p> tags
    
    const author = faker.name.findName();
    const blogpost = new Blogpost({ title, summary, content, author });
    blogpost.save()
        .then((result) => {
            console.log(`New blog added: ${result.title}`);
        })
        .catch((err) => {
            console.error(err);
        });
}
