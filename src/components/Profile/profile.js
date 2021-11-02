import React, { useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import { useFormWithValidation } from '../../Validation/UseForm';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { profileUpdateMessage, setProfileUpdateMessage } = props;

  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm
  } = useFormWithValidation(props.clearFormError);

  useEffect(() => {
    // if (currentUser.name === e.target.elements.name.value) {
    //   e.target.elements.name.setCustomValidity("Имя пользователя не может сопадать с существующем!");
    //   setIsValid(false);
    // } else {
    //   e.target.elements.name.setCustomValidity("");
    // }
    //
    // if (currentUser.email === e.target.elements.email.value) {
    //   e.target.elements.email.setCustomValidity("email не может сопадать с существующем!");
    //   setIsValid(false);
    // } else {
    //   e.target.elements.email.setCustomValidity("");
    // }
  }, [currentUser])

  function changeName(e) {
    setProfileUpdateMessage("")
    if (currentUser.name === e.target.value) {
      e.target.setCustomValidity("Имя пользователя не может сопадать с существующем!");
    } else {
      e.target.setCustomValidity("");
    }

    handleChange(e)
  }

  function changeEmail(e) {
    setProfileUpdateMessage("")
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
    })
    .then(() => {
      resetForm();
    })
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
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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

          {
            profileUpdateMessage && (
              <span className='register__subtitle'>
                  { profileUpdateMessage }
              </span>
            )
          }

          <button className="profile__subtitle"
                  type="submit"
                  disabled={!isValid}
          >
                  Редактировать
          </button>
          <Link className="profile__exit" to="/" onClick={ props.signOut }>
                  Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Profile;
