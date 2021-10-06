import React from 'react';
import {Link} from "react-router-dom";
import menuImg from '../../images/icon__COLOR_icon-main.svg';

function Navigation() {
    // const loggedIn = false;
    return(
        <header>
            <>
                <div className='header__group header__group-style'>
                    <div className='header__box-link'>
                    <Link to='/movies' className='header__nav-link'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__nav-link'>Сохраненые фильмы</Link>
                    </div>
                    <Link to='/profile' className='header__nav-link header__nav-link-style'>Аккаунт</Link>
                    <img className='header__menu' src={menuImg} alt='иканка меню'/>
                </div>
            </>
        </header>

    )
}
export default Navigation;
