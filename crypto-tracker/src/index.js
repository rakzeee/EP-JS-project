import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from "react-redux";
import {store} from "./store";

const App = () => (
    <Provider>
        <Router>
            <header>                
                asd
            </header>
        </Router>
    </Provider>
);

const handleClick = (data) => {
    console.log(data)
};

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);