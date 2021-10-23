import React from 'react';
import './register.css';
import {Link} from "react-router-dom";
import LogoHeader from "../LogoHeader/logo";
import { useFormWithValidation } from '../../Validation/UseForm';

function Register(props) {
    // const [name, setName] = React.useState('')
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')

    const {
        values,
        handleChange,
        errors,
        isValid,
        resetForm
    } = useFormWithValidation(props.clearFormError);

    // resetForm(values, errors, isValid);
    console.dir({
        values,
        errors,
        isValid,
        props,
    })


    // function changeName(evt) {
    //     setName(evt.target.value);
    // }

    // function changeEmail(evt) {
    //     setEmail(evt.target.value);
    // }
    //
    // function changePassword(evt) {
    //     setPassword(evt.target.value);
    // }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister(values.name, values.email, values.password);
    }


    return (
        <section className='register'>
            <div className='register__container'>
                <LogoHeader/>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form
                    className='register__form'
                    onSubmit={handleSubmit}
                >
                    <div className='register__box'>
                        <p className='register__input-name'>
                            Имя
                        </p>
                        <input
                            autoComplete='off'
                            className='register__input'
                            onChange={handleChange}
                            type="text"
                            name='name'
                            placeholder='name'
                            pattern="^[A-Za-zА-ЯЁа-яё]+$"
                            required
                        />
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>E-mail</p>
                        <input
                            autoComplete='off'
                            className='register__input'
                            type='email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            placeholder='email'
                            required
                        />
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>Пароль</p>
                        <input
                            autoComplete='off'
                            className='register__input'
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            className='register__input-name'
                            placeholder="password"
                            required
                        />
                    </div>

                    {
                          props.formError.registerError && (
                                <span className='register__subtitle'>
                                    { props.formError.errorMessage || "Что-то пошло не так..." }
                                </span>
                          )
                    }

                    <button
                        className='register__button'
                        type='submit'
                        disabled={ !isValid }
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <div className='register__footer'>
                    <p className='register__text'>
                        Уже зарегистрированы?
                    </p>
                    <Link className='register__link' to='/signin'>Войти</Link>
                </div>
            </div>
        </section>
    )
}


export default Register;
