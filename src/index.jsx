import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./data/store";
import About from "./about/about";
import ConnectedHome from "./home/home"
import Header from "./header/header"
import NotFound from "./404/404";
import ExpandNews from "./news/expandnews";
import ConnectedNews from "./news/news";
import "./index.css";
import { Typography } from "@material-ui/core";

const App = () => (
    <React.Fragment>
        <Header className="header"/>
        <div className="wrapper">
            <div className="content">
                <Switch>
                    <Route exact path="/" component={ConnectedHome}/>
                    <Route path={"/about"} component={About}/>
                    <Route exact path={"/news"}  component={ConnectedNews}/>
                    <Route path={"/news/:id"} component={ExpandNews} />
                    <Route component = {NotFound}/>
                </Switch>
            </div>
        </div>
        <div className="footer">
            <div className="footer-text">
                <Typography variant="body2" gutterBottom align="right">
                    <p>Innopolis University (c) 2018</p>
                    <p className="mail">r.akhmetshin@innopolis.ru</p>
                </Typography>
            </div>
        </div>
    </React.Fragment>
);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ),
    document.getElementById('app')
);