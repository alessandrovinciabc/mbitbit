import React from 'react';

import Card from 'react-bootstrap/Card';

class MusicPlayer extends React.Component {
    render() {
        return (
            <Card className="text-center music-player">
                <Card.Body>
                    <audio controls loop id="audioPlayer">
                        <source
                            src={this.props.songSrc}
                            type={"audio/" + this.props.fileType}
                        />
                    </audio>
                </Card.Body>
            </Card>
        );
    }
}

export default MusicPlayer;