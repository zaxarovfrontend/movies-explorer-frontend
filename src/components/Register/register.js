import React from 'react';
import './register.css';
import {Link} from "react-router-dom";

function Register() {
    const [name, email] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <section className='register'>
            <div className='register__container'>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <div className='register__box'>
                        <p className='register__input-name'>Имя</p>
                        <input className='register__input' type='text' name='name'
                               value={name || ''} placeholder='Владимир' required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>E-mail</p>
                        <input className='register__input' type='email' name='email'
                               value={email || ''} placeholder='zaxarov@mail.ru' required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>Пароль</p>
                        <input className='register__input' type='passwo' name='passwo'
                               value={password} placeholder='*************' required/>
                    </div>
                    <span className='register__subtitle'>Что-то пошло не так...</span>
                    <button className='register__button' type='submit'>Зарегистрироваться</button>
                </form>
                <div className='register__footer'>
                    <p className='register__text'>Уже зарегистрированы?</p>
                    <Link className='register__link' to='/signin'>Войти</Link>
                </div>
            </div>
        </section>
    )
}


export default Register;
