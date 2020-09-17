import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';

ReactDOM.render(
    <Navbar bg="dark">
        <Navbar.Brand className="text-light">
            <i class="far fa-laugh-beam"></i>mbitbit
        </Navbar.Brand>
    </Navbar>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
