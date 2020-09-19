import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

ReactDOM.render(
    <React.Fragment>
        <Navbar bg="dark" className="main-navbar">
            <Navbar.Brand className="navbar-logo text-primary">
                <i className="far fa-laugh-beam navbar-logo--image"></i>mbitbit
            </Navbar.Brand>
        </Navbar>
        <Container className="main-container">
            <Card className="text-center">
                <Card.Header>Name of the song...</Card.Header>
                <Card.Body>
                </Card.Body>
            </Card>
        </Container>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
