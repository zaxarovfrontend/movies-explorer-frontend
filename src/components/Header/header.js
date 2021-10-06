import React from 'react';

import {NavLink, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import LogoHeader from "../LogoHeader/logo";


function Header(props) {
    const {pathname} = useLocation();
    const isColorHead = pathname === '/' ? 'header' : 'header header-style';
    return (
        <header className={isColorHead}>
            <div className='header__group'>
                 <LogoHeader/>
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

