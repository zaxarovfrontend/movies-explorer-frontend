import React from 'react';

import Logo from '../../images/logo.svg';
import {Link, NavLink, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";


function Header(props) {
    const {pathname} = useLocation();
    const isColorHead = pathname === '/' ? 'header' : 'header header-style';
    // const loggedIn = false;
    return (
        <header className={isColorHead}>
            <div className='header__group'>
                <Link href="#" target="_blank" rel="noopener"><img className="header__logo" src={Logo}
                                                                   alt="логотип"/></Link>
                {props.loggedIn && ( pathname === '/movies' || pathname === '/saved-movies') ? (
                        <Navigation />
                ) : (
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
                )}
            </div>
        </header>
    );
}


export default Header;

