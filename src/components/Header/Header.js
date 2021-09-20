import React from 'react';

import Logo from '../../images/logo.svg';
import {Link} from "react-router-dom";


function Header({ lending }) {
    // const loggedIn = false;
    return (
        <header className="header">
            <a href="#" target="_blank" rel="noopener"><img className="header__logo" src={Logo}
                                                            alt="логотип"/></a>
            {/*{!loggedIn && lending ? (*/}
            <>
                <div className='header__container'>
                <Link className='header__button' to="/signup">
                    Регистрация
                </Link>
                <Link className='header__button' to="/signin">
                    Войти
                </Link>
                </div>
            </>
            {/*) : (*/}
            {/*/!*<MenuNavigation />*!/*/}
            {/*)}*/}
        </header>
    );
}


export default Header;
