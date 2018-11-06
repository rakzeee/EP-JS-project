import React from "react";
import logo from "../media/logo-final.png";
import Link from "react-router-dom/es/Link";
import Button from '@material-ui/core/Button';

 const Header = () => (
    <header>
        <div>
            <Link to={'/'}>
                <img src={logo} width="100px" height="100px" alt=""/>
                <span className="title">Crypto-tracker</span>
            </Link>
            <Button className={'about'} component={Link} to={"/about"}>About</Button>
            <Button className={'news'} component={Link} to={"/news"}>News</Button>
        </div>
     </header>
)
 export default Header 