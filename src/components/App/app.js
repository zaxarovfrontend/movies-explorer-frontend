import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
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



function App() {
    const [currentUser, setCurrentUser] = React.useState({});


    //Авторизация
    const [loggedIn, setLoggedIn] = React.useState(true);
    const [userEmail, setUserEmail] = React.useState('');
    const [isSuccess, setIsSuccess] = React.useState(false);
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


    function register(email, password, name) {
        auth.register(email, password, name).then(
            () => {
                setIsSuccess(true)
                history.push('/movies');
            })
            .catch(() => {
                setIsSuccess(false)
            })
    }

    function login(email, password) {
        auth.authorization(email, password).then(
            (data) => {
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('token'))
                setLoggedIn(true)
                // history.push("/movies");
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function signOut() {
        localStorage.removeItem("token");
        setLoggedIn(false);
        history.push('signin');
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
                <Profile/>
            </Route>
            <Route path ='/signin'>
                <Login onLogin={login} onChekToken={checkToken}/>
            </Route>
            <Route path ='/signup'>
                <Register onRegister={register}/>
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
