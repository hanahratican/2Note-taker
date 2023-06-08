const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Moved to htmlRoutes.js
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });


// Moved to apiRoutes.js
// app.get('/api/notes', (req, res) => {
//     const savedNotes = db;
//     res.json(savedNotes);
// });

// app.post('/api/notes', (req, res) => {
//     const savedNotes = db;
//     const newNote = req.body;
//     savedNotes.push(newNote);
//     fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(savedNotes), (err) => {
//         if (err) throw err;
//         res.json(savedNotes);
//     });
// });


    

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
    }
);