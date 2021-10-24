import React from 'react';
import '../Register/register.css';
// import {CurrentUserContext} from "../Context/CurrentUserContext";
import {Link} from "react-router-dom";
import LogoHeader from "../LogoHeader/logo";


function Login(props) {
    const[email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    function changeEmail(evt) {
        setEmail(evt.target.value);
    }

    function changePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onLogin(email, password)
    }


    return (
        <section className='login'>
            <div className='register__container'>
                <LogoHeader/>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'  onSubmit={handleSubmit}>
                    <div className='register__box'>
                        <p className='register__input-name'>E-mail</p>
                        <input autoComplete='off' className='register__input' type='email' name='email'
                               value={email || ''} placeholder={props.email} onChange={changeEmail} required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>Пароль</p>
                        <input autoComplete='off' className='register__input' type='password' name='password'
                               value={password} onChange={changePassword} placeholder={props.password} required/>
                    </div>
                    <button className='register__button' type='submit'>Войти</button>
                </form>
                <div className='register__footer'>
                    <p className='register__text'>Еще не зарегистрированы?</p>
                    <Link className='register__link' to='/signup'>Регистрация</Link>
                </div>
            </div>
        </section>
    )
}

export default Login;
