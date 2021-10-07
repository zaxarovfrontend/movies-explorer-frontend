import React from 'react';
import {Link} from "react-router-dom";
import MenuNavigation from "../MenuNavigation/menuNavigation";


function Navigation() {
    return(
        <header>
            <MenuNavigation/>
            <>
                <div className='header__group header__group-style'>
                    <div className='header__box-link'>
                    <Link to='/movies' className='header__nav-link'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__nav-link'>Сохраненые фильмы</Link>
                    </div>
                    <Link to='/profile' className='header__nav-link header__nav-link-style'>Аккаунт</Link>
                    <button className='header__menu'/>
                </div>
            </>
        </header>

    )
}
export default Navigation;
