import React from 'react';

import Card from 'react-bootstrap/Card';

class MusicPlayer extends React.Component {
    render() {
        return (
            <Card className="text-center music-player">
                <Card.Header>
                    {this.props.songName}
                    <br />
                    {this.props.authorName}
                </Card.Header>
                <Card.Body>
                    <audio controls loop>
                        <source
                            src={this.props.songSrc}
                            type="audio/wav"
                        />
                    </audio>
                </Card.Body>
            </Card>
        );
    }
}

export default MusicPlayer;