import React from 'react';
import '../Register/register.css';
// import {CurrentUserContext} from "../Context/CurrentUserContext";
import { Link } from 'react-router-dom';
import LogoHeader from '../LogoHeader/logo';
import { useFormWithValidation } from '../../Validation/UseForm';

function Login(props) {
  const {
    values,
    handleChange,
    isValid,
    // resetForm
  } = useFormWithValidation(props.clearFormError);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values.email, values.password);
  }

  return (
    <section className="login">
      <div className="register__container">
        <LogoHeader/>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form"
              onSubmit={handleSubmit}
              type="search"
        >

          <div className="register__box">
            <p className="register__input-name">E-mail</p>
            <input className="register__input"
                   type="email"
                   name="email"
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                   value={values.email || ''}
              // placeholder={props.email}
                   onChange={handleChange}
                   required/>

          </div>
          <div className="register__box">
            <p className="register__input-name">Пароль</p>
            <input
              className="register__input"
              type="password"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              // placeholder={props.password}
              required/>
          </div>

          {
            props.formError.registerError && (
              <span className='register__subtitle'>
                  { props.formError.errorMessage }
              </span>
            )
          }

          <button className="register__button" type="submit"
                  disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <div className="register__footer">
          <p className="register__text">Еще не зарегистрированы?</p>
          <Link className="register__link" to="/signup">Регистрация</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
