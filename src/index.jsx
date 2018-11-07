import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./data/store";
import About from "./about/about";
import Home from "./home/home"
import Header from "./header/header"
import NotFound from "./404/404";
import ConnectedNews from "./ news/news";

const App = () => (
    <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/news"}  component={ConnectedNews}/>
            <Route component = {NotFound}/>
        </Switch>
    </React.Fragment>
);

const handleClick = (data) => {
    console.log(data)
};

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ),
    document.getElementById('app')
);