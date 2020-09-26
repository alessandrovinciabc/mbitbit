const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/songlist', (req, res) => {
    const musicDirectory = './build/tracks/';

    fs.readdir(musicDirectory, (err, files) => {
        if (err) {
            throw err;
        }

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
