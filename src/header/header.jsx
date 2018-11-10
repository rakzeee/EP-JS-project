import React from "react";
import logo from "../../media/logo-final.png";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./header.css"
import { Typography } from "@material-ui/core";

 const Header = () => (
    <header>
        <div className={'head'}>
            <Link className={'link'} to={'/'}>
                <img src={logo} width="100px" height="100px" alt=""/>
                <span className="title">
                    <Typography component="h2" variant="display1" gutterBottom>CRYPTO-TRACKER</Typography>
                </span>
            </Link>
            <div className={'buttons'}>
                <Button className={'news'} component={Link} to={"/news"}>News</Button>
                <Button className={'about'} component={Link} to={"/about"}>About</Button>
            </div>
        </div>
     </header>
)
 export default Header 