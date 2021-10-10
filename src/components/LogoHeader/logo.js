import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../images/logo.svg';
import './logo.css';

function LogoHeader() {
    return(
        <Link href="#" target="_blank"  rel="noopener noreferrer"><img className="logo" src={Logo}
                                                           alt="логотип"/></Link>
    )
}

export default LogoHeader;
