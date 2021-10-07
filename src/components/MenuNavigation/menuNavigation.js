import React from 'react';
import {Link} from "react-router-dom";
import './menuNavigation.css';

function MenuNavigation() {
    return(
        <section className='menu-navigation'>
            <div className='menu-navigation__container'>
              <button className='menu-navigation__close'></button>
                <div className='menu-navigation__group'>
                    <Link to='/' className='menu-navigation__link'>Главная</Link>
                    <Link to='/movies' className='menu-navigation__link menu-navigation__link_active'>Фильмы</Link>
                    <Link to='/saved-movies' className='menu-navigation__link'>Сохраненые Фильмы</Link>
                    <Link to='/profile' className='menu-navigation__link menu-navigation__link-style'>Аккаунт</Link>
                </div>
            </div>
        </section>
    )
}


export default MenuNavigation;
