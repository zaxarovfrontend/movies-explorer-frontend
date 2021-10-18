import React from 'react';
import './register.css';
import {Link} from "react-router-dom";
import LogoHeader from "../LogoHeader/logo";

function Register(props) {

    const [name, setName] = React.useState('')
    const[email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function changeName(evt) {
        setName(evt.target.value);
    }

    function changeEmail(evt) {
        setEmail(evt.target.value);
    }

    function changePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onRegister(email, password, name)
    }


    return (
        <section className='register'>
            <div className='register__container'>
                <LogoHeader/>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form' onSubmit={handleSubmit}>
                    <div className='register__box'>
                        <p className='register__input-name'>Имя</p>
                        <input autoComplete='off' className='register__input'  onChange={changeName} type="text" name='name'
                               placeholder={props.name} required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>E-mail</p>
                        <input autoComplete='off' className='register__input' type='email' name='email'
                               value={email} onChange={changeEmail} placeholder={props.email} required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>Пароль</p>
                        <input  autoComplete='off' className='register__input' type='password' name='password'
                               value={password} onChange={changePassword} placeholder={props.password} required/>
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
