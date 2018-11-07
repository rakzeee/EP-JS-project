import React from "react";
import logo from "../../media/logo-final.png";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./header.css"

 const Header = () => (
    <header>
        <div className={'head'}>
            <Link className={'link'} to={'/'}>
                <img src={logo} width="100px" height="100px" alt=""/>
                <span className="title">Crypto-tracker</span>
            </Link>
            <div className={'buttons'}>
                <Button className={'news'} component={Link} to={"/news"}>News</Button>
                <Button className={'about'} component={Link} to={"/about"}>About</Button>
            </div>
        </div>
     </header>
)
 export default Header 