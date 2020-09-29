import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Bootstrap
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import UploadForm from './components/UploadForm';

async function main() {
    const songListRequest = await fetch('http://localhost:3000/api/songlist');
    const availableSongs = await songListRequest.json();

    class App extends React.Component {
        state = {
            selectedSong: '',
        };

        render() {
            return (
                <React.Fragment>
                    <MusicPlayer
                        songSrc={'./tracks/' + this.state.selectedSong}
                        fileType={this.state.selectedSong.split('.')[1]}
                    />
                    <ul className="song-list">
                        {availableSongs.map((song) => (
                            <li
                                onClick={() => {
                                    this.setState({ selectedSong: song });
                                    document
                                        .getElementById('audioPlayer')
                                        .load();
                                }}
                            >
                                {song}
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            );
        }
    }

    ReactDOM.render(
        <React.Fragment>
            <Header />
            <Container className="main-container">
                <UploadForm />
                <App />
            </Container>
        </React.Fragment>,
        document.getElementById('root')
    );
}

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
