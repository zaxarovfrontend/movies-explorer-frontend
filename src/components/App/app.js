import React from 'react';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import api from '../../utils/api';
import '../../index.css';
// import ProtectedRoute from "../ProtectedRoute/protectedRoute";
import Main from "../Main/main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/savedMovies";
import Profile from "../Profile/profile";
import Login from "../Login/Login";
import Register from "../Register/register";
import NotFound from "../NotFound/notFound";
import Header from "../Header/header";
// import Preloader from '../Preloader/preloader'

import * as auth from "../../utils/auth";


import {CurrentUserContext} from '../Context/CurrentUserContext';

function App(props) {
    const [currentUser, setCurrentUser] = React.useState({});
    //Авторизация
    const [loggedIn, setLoggedIn] = React.useState(true);
    const [userEmail, setUserEmail] = React.useState('');

    const [formError, setFormError] = React.useState({ registerError: false, errorMessage: "" });

    function clearFormError() {
        setFormError({
            registerError: false,
            errorMessage: ""
        })
    }


    // const [isSuccess, setIsSuccess] = React.useState(false);
    const history = useHistory();

    const checkToken = React.useCallback(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        auth.checkToken(token).then(
            (data) => {
                setLoggedIn(true);
                setUserEmail(data.email);
                history.push('/movies');
            })
            .catch((err) => {
                    console.log(err);
                }
            );
    }, [history]);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            checkToken();
        }
    }, [checkToken]);



    //запрос данных пользователя
    React.useEffect(() => {
        const token = localStorage.getItem('token');
        api.getUserInfo(token)
            .then((data) => {
                setCurrentUser(data)
            })
            .catch((err) => console.log(err))

    }, [])

    function handleUpdateUser(data) {
        api.editUserData(data, localStorage.token)
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function register(name, email, password) {
        auth.register(name, email, password).then(
            (res) => {
                history.push('/signin');

                clearFormError();
            })
            .catch((error) => {
                error.then((errorJson) => {
                    setFormError({
                        registerError: true,
                        errorMessage: errorJson.message
                    });
                })
            })
    }

    function login(email, password) {
        console.log(email, password);
        auth.authorization(email, password).then(
            (data) => {
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('token'))
                setLoggedIn(true)
                history.push("/movies");
            })
            .catch((err) => {
                console.log(err)
            })
    }


    function signOut() {
        localStorage.removeItem("token");
        setLoggedIn(false);
        // history.push('signin');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path ='/'>
                        <Header  loggedIn={loggedIn} userEmail={userEmail} onSignOut={signOut}/>
                        <Main />
                    </Route>
                    <Route path ='/movies'>
                        <Header  loggedIn={loggedIn}/>
                        <Movies />
                    </Route>
                    <Route path ='/saved-movies'>
                        <Header  loggedIn={loggedIn}/>
                        <SavedMovies/>
                    </Route>
                    <Route path ='/profile'>
                        <Header  loggedIn={loggedIn}/>
                        <Profile handleUpdateUser={handleUpdateUser}  />
                    </Route>
                    <Route path ='/signin'>
                        <Login onLogin={login} onChekToken={checkToken}/>
                    </Route>
                    <Route path ='/signup'>
                        <Register
                            onRegister={register}
                            formError={ formError }
                            clearFormError={clearFormError}
                        />
                    </Route>
                    <Route path ='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
