import React from 'react';

import Logo from '../../images/logo.svg';
import {Link, NavLink, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";


function Header({lending}) {
    const loggedIn = false;
    return (
        <header className={loggedIn ? "header" : "header header-style"}>
            <div className='header__group'>
                <Link href="#" target="_blank" rel="noopener"><img className="header__logo" src={Logo}
                                                                   alt="логотип"/></Link>
                {!loggedIn && lending ? (
                    <>
                        <div className='header__container'>
                            <NavLink className='header__button' to="/signup">
                                Регистрация
                            </NavLink>
                            <NavLink className='header__button header__button-active' to="/signin">
                                Войти
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <Navigation />
                    )}
            </div>
        </header>
);
}


export default Header;
