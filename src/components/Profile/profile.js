import React  from 'react';
import './profile.css';
import {Link} from "react-router-dom";
import {CurrentUserContext} from "../Context/CurrentUserContext";


function Profile({handleUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email,  setEmail] =  React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);


    function changeName(e) {
        setName(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
       e.preventDefault()
        handleUpdateUser({
            name,
            email: email
        })
    }

    return (
        <section className='profile'>
            <div className='profile__container'>
                <h1 className='profile__title'>Привет, {name}!</h1>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <div className='profile__box'>
                        <p className='profile__input-name'>Имя</p>
                        <input autoComplete='off' className='profile__input' type='text' name='name'
                               value={name || ''} placeholder={name}  onChange={changeName} required/>
                    </div>
                    <div className='profile__box profile__box-style'>
                        <p className='profile__input-name'>E-mail</p>
                        <input  autoComplete='off' className='profile__input' type='email' name='email'
                               value={email || ''} placeholder={email}   onChange={changeEmail} required/>
                    </div>
                    <button className='profile__subtitle' type="submit">Редактировать</button>
                    <Link className='profile__exit' to='/signin'>Выйти из аккаунта</Link>
                </form>
            </div>
        </section>
    )
}

export default Profile;
