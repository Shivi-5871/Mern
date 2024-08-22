const express = require("express");
const router = express.Router();



// router.get('/students', (req, res) => {
//     res.send("All Students");
// });

// router.get('/students/new', (req, res) => {
//     res.send("New Student");
// });

// router.get('/students/:id', (req, res) => {
//     res.send(`Student with id: ${req.params.id}`);
// });

// router.post('/students', (req, res) => {
//     res.send("Create Student");
// });





//ANOTHER METHOD TO WRITE THE ROUTES IN ORDER TO REMOVE DO BAAR /STUDENTS KA AANA

router.get('/', (req, res) => {
    res.send("All Students");
});

router.get('/new', (req, res) => {
    res.send("New Student");
});

router.get('/:id', (req, res) => {
    res.send(`Student with id: ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send("Create Student");
});



//exporting the router
module.exports = router;