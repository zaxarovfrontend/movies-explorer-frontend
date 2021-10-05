import React from 'react';
import {Link} from "react-router-dom";

function Navigation({}) {
    return(
     <>
             <div className='header__group'>
                 <Link to='/movies' className='header__nav-link'>Фильмы</Link>
                 <Link to='/saved-movies' className='header__nav-link'>Сохраненые фильмы</Link>
                 <Link to='/profile' className='header__nav-link'>Аккаунт</Link>
             </div>
         )}
     </>
    )
}

export default Navigation;
