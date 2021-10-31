import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import { useFormWithValidation } from '../../Validation/UseForm';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    values,
    errors,
    handleChange,
    isValid,
  } = useFormWithValidation(props.clearFormError);

  function changeName(e) {
    if (currentUser.name === e.target.value) {
      e.target.setCustomValidity("Имя пользователя не может сопадать с существующем!");
    } else {
      e.target.setCustomValidity("");
    }

    handleChange(e)
  }

  function changeEmail(e) {
    if (currentUser.email === e.target.value) {
      e.target.setCustomValidity("email не может сопадать с существующем!");
    } else {
      e.target.setCustomValidity("");
    }

    handleChange(e)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">
                    Привет, {currentUser.name}!
        </h1>
        <form className="profile__form"
                    onSubmit={handleSubmit}>
          <div className="profile__box">
            <p className="profile__input-name">
                    Имя
            </p>
            <input autoComplete="off" className="profile__input"
                   type="text"
                   name="name"
                   value={values.name || ''}
                   placeholder={currentUser.name}
                   onChange={changeName}
                   required
            />

          </div>
          {
            errors.name && (
              <span className='register__subtitle register__subtitle_active'>
                  { errors.name }
                </span>
            )
          }

          <div className="profile__box profile__box-style">
            <p className="profile__input-name">E-mail</p>
            <input autoComplete="off" className="profile__input"
                   type="email"
                   name="email"
                   value={values.email || ''}
                   placeholder={currentUser.email}
                   onChange={changeEmail}
                   required/>
          </div>
          {
            errors.email && (
              <span className='register__subtitle register__subtitle_active'>
                  { errors.email }
                </span>
            )
          }


          {
            props.formError.registerError && (
              <span className='register__subtitle'>
                  { props.formError.errorMessage || "Что-то пошло не так..." }
              </span>
            )
          }

          <button className="profile__subtitle"
                  type="submit"
                  disabled={!isValid}
          >
                  Редактировать
          </button>
          <Link className="profile__exit" to="/signin" onClick={ props.signOut }>
                  Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Profile;
