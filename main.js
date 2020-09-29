const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

//Multer
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './build/tracks/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

let upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'build')));

app.post('/upload', upload.single('newTrack'), (req, res) => {
    console.log(req.file, req.body);
    res.redirect('/');
});

app.get('/api/songlist', (req, res) => {
    const musicDirectory = './build/tracks/';

    fs.readdir(musicDirectory, (err, files) => {
        if (err) {
            throw err;
        }

        console.log(files);
        res.json(files);
    });
});

app.get('/:songName', (req, res) => {
    res.json({ link: `/tracks/${req.params.songName}` });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}...`);
});
