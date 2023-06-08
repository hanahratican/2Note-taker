const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');
const router = require('express').Router();

// router.get('/notes', (req, res) => {
//     const savedNotes = db;
//     res.json(savedNotes);
// }
// );

app.get('/api/notes', (req, res) => {
    const savedNotes = db;
    res.json(savedNotes);
});

app.post('/api/notes', (req, res) => {
    const savedNotes = db;
    const newNote = req.body;
    savedNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        res.json(savedNotes);
    });
});


router.post('/notes', (req, res) => {
    const newNote = req.body;
    const savedNotes = db;
    newNote.id = db.length.toString();
    savedNotes.push(newNote);
    console.log(savedNotes);
    fs.writeFileSync(path.join(__dirname,'./db/db.json'), JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        res.json(savedNotes);
    });
}
);

module.exports = router;