import React from 'react';

class UploadForm extends React.Component {
    render() {
        return (
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="newTrack" />
                <button type="submit">Upload new track</button>
            </form>
        );
    }
}

export default UploadForm;