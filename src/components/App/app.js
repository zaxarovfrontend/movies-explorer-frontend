import React, { useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
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
    const [currentUser, setCurrentUser] = useState({});
    //Авторизация
    const [loggedIn, setLoggedIn] = useState(true);
    const [userEmail, setUserEmail] = useState('');

    const [formError, setFormError] = useState({ registerError: false, errorMessage: "" });

    const [likedMoviesIds, setLikedMoviesIds] = useState([]);

    const [searchProblemMessage, setSearchProblemMessage] = useState('');

    const updateLikedMoviesIds = (id) => {
        let tempArr = [...likedMoviesIds];

        if (tempArr.indexOf(id) === -1) {
            tempArr.push(id);
        } else {
            tempArr = tempArr.filter((item) => {
                return item !== id;
            })
        }

        setLikedMoviesIds(tempArr)
    }

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
        auth.checkToken(token).then(
            (data) => {
                data.json().then((body) => {
                    setLoggedIn(true);
                    setUserEmail(body.email);
                    history.push('/movies');
                })
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
          .catch((error) => {
              console.log(error)
              error.then((errorJson) => {
                  setFormError({
                      registerError: true,
                      errorMessage: errorJson.message
                  });
              })
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
          .catch((error) => {
              error.then((errorJson) => {
                  setFormError({
                      registerError: true,
                      errorMessage: errorJson.message
                  });
              })
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
                        <Movies
                          updateLikedMoviesIds={updateLikedMoviesIds}
                          likedMoviesIds={ likedMoviesIds}
                          searchProblemMessage={ searchProblemMessage }
                          setSearchProblemMessage={ setSearchProblemMessage }
                        />
                    </Route>
                    <Route path ='/saved-movies'>
                        <Header  loggedIn={loggedIn}/>
                        <SavedMovies
                          likedMoviesIds={likedMoviesIds}
                          updateLikedMoviesIds={updateLikedMoviesIds}
                          searchProblemMessage={ searchProblemMessage }
                          setSearchProblemMessage={ setSearchProblemMessage }
                        />
                    </Route>
                    <Route path ='/profile'>
                        <Header  loggedIn={loggedIn}/>
                        <Profile
                          handleUpdateUser={handleUpdateUser}
                          formError={ formError }
                          clearFormError={clearFormError}/>
                    </Route>
                    <Route path ='/signin'>
                        <Login onLogin={login}
                               formError={ formError }
                               clearFormError={clearFormError}
                        />
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
