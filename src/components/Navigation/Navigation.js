import React from 'react';
import {Link} from "react-router-dom";

function Navigation({}) {
    return(
        <header>
            <>
                <div className='header__group header__group-style'>
                    <div className='header__box-link'>
                    <Link to='/movies' className='header__nav-link'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__nav-link'>Сохраненые фильмы</Link>
                    </div>
                    <Link to='/profile' className='header__nav-link header__nav-link-style'>Аккаунт</Link>
                </div>

            </>
        </header>
    )
}

export default Navigation;
