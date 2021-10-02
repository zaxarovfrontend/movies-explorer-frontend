import React from 'react';

import Logo from '../../images/logo.svg';
import {Link} from "react-router-dom";

function Header({ loggedIn }) {
    return (
        <header className="header">
            <div className='header__group'>
            <a href="#" target="_blank" rel="noopener"><img className="header__logo" src={Logo}
                                                            alt="логотип"/></a>
            <>
                <div className='header__container'>
                <Link className='header__button' to="/signup">
                    Регистрация
                </Link>
                <Link className='header__button header__button-active' to="/signin">
                    Войти
                </Link>
                </div>
            </>

        </div>

        </header>
    );
}


export default Header;
