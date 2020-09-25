import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Bootstrap
import Container from 'react-bootstrap/Container';

import Header from './Header';
import MusicPlayer from './MusicPlayer';

ReactDOM.render(
    <React.Fragment>
        <Header />
        <Container className="main-container">
            <MusicPlayer
                songName="Tipplechipper"
                authorName="..."
                songSrc="./tracks/tipplechipper.wav"
            />
        </Container>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
