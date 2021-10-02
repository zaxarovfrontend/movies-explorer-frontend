import React from 'react';
import './profile.css';
import {Link} from "react-router-dom";


function Profile() {
    const [name, email] = React.useState('')
    return (
        <section className='profile'>
            <div className='profile__container'>
                <h1 className='profile__title'>Привет, Владимир!</h1>
                <form className='profile__form'>
                    <div className='profile__box'>
                        <p className='profile__input-name'>Имя</p>
                        <input className='profile__input' type='text' name='name'
                               value={name || ''} placeholder='Владимир' required/>
                    </div>
                    <div className='profile__box profile__box-style'>
                        <p className='profile__input-name'>E-mail</p>
                        <input className='profile__input' type='email' name='email'
                               value={email || ''} placeholder='zaxarov@mail.ru' required/>
                    </div>
                <button className='profile__subtitle' type="submit">Редактировать</button>
                <Link className='profile__exit'>Выйти из аккаунта</Link>
                </form>
            </div>

        </section>

    )
}

export default Profile;
