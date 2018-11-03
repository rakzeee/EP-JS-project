import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import {About} from "./about";

const App = () => (
    <Provider>
        <Router>
            <div>
                <Switch>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/news"}  render = {(props) => (
                        <div>News</div>
                    )}/>
                    <Route render = {() => (404)}/>
                </Switch>
                <header>                
                    MyApp
                </header>
            </div>
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